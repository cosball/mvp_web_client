import {
	LayoutContainer,
	CustomButton,
	InputBox
} from '@/modules/Common/components'

import {
	UploadFileService,
	AwsService
} from '@/modules/Common/services'

import {
	AccountUpdateSuccessfulModal
} from '@/modules/AccountSettings/components'

import Datepicker from 'vuejs-datepicker'
import moment from 'moment'

export default {
	name: 'account-settings',
	components: {
		LayoutContainer,
		CustomButton,
		InputBox,
		Datepicker
	},
	computed: {
		isComplete() {
			let isValid = true
			// console.log(this.inputs.account)
			Object.keys(this.inputs.account).forEach((key) => {
				// console.log('KEY:' + key + ', : ' + this.inputs.account[key])
				if (['email', 'country', 'raceId', 'dob', 'gender'].indexOf(key) !== -1 && !this.inputs.account[key]) {
					isValid = false
					return false
				}
			})
			return isValid
		}
	},
	data() {
		return {
			showError: false,
			errorMessage: false,
			file: this.$store.state.AccountSettings.account.profileURL,
			fileObject: null,
			S3Client: AwsService.uploadFileS3('Profile-Images'),
			userId: this.$store.state.AccountSettings.account.id,
			inputs: {
				account: {
					id: this.$store.state.AccountSettings.account.id,
					email: this.$store.state.AccountSettings.account.email,
					username: this.$store.state.AccountSettings.account.username,
					country: this.$store.state.AccountSettings.account.country,
					raceId: this.$store.state.AccountSettings.account.raceId,
					dob: this.$store.state.AccountSettings.account.dob,
					gender: this.$store.state.AccountSettings.account.gender,
					toImprove: this.$store.state.AccountSettings.account.toImprove,
					ongoingProblems: this.$store.state.AccountSettings.account.ongoingProblems,
					profileURL: this.$store.state.AccountSettings.account.profileURL,

					roleType: this.$store.state.AccountSettings.account.roleType,
					password: ''
				},
				confirmPassword: '',
			},
			accountBalance: 0,
			datepickerOptions: {
				disabledDates: {
					from: new Date()
				}
			},
			textRace: '',
			countryList: [],
			raceData: []
		}
	},
	created() {
		Promise.all([this.$store.dispatch('Common/GET_COUNTRY_LIST'), this.$store.dispatch('Common/GET_RACE_DATA'), this.$store.dispatch('AccountSettings/GET_USER_BALANCE', this.$store.state.AccountSettings.account.username)]).then((results) => {
			this.countryList = results[0].data
			this.raceData = results[1].data
			this.accountBalance = results[2].balance
			return Promise.resolve()
		}).then(() => {
		})
	},
	methods: {
		customFormatter(date) {
			return moment(date).format('YYYY-MM-DD')
		},
		goBack() {
			this.$router.back()
		},
		browseImageFile() {
			this.$refs['file-input'].$el.querySelector('input[type=file]').click()
		},
		resetImageFile() {
			this.file = null
			this.fileObject = null
		},
		browseFile(e) {
			this.fileObject = e.target.files[0]
			this.$refs['file-input'].$el.querySelector('input[type=file]').value = ''
			if (this.fileObject) {
				this.showError = false
				this.errorMessage = ''
				this.$store.commit('Common/SHOW_BASE_LOADER', true)
				UploadFileService.checkFileExtension(this.fileObject, process.env.VUE_APP_UPLOAD_PROFILE_IMAGE_FORMAT).then(() => {
					return UploadFileService.checkFileSize(this.fileObject, process.env.VUE_APP_UPLOAD_PROFILE_IMAGE_SIZE)
				}).then(() => {
					UploadFileService.toDataURL(this.fileObject).then((imageUrl) => {
						this.file = imageUrl
					})
				}).catch((error) => {
					this.showError = true
					this.errorMessage = error
				}).finally(() => {
					this.$store.commit('Common/SHOW_BASE_LOADER', false)
				})
			}
		},
		uploadProfile(fileObject) {
			return new Promise((resolve, reject) => {
				this.S3Client.uploadFile(fileObject).then((data) => {
					return this.$store.dispatch('AccountSettings/UPDATE_PROFILE_URL', data.location)
				}).then((profileURL) => {
					resolve(profileURL)
				}).catch((error) => {
					reject(error)
				})
			})
		},
		deleteFile(imageFile) {
			return new Promise((resolve, reject) => {
				this.S3Client.deleteFile(imageFile).then((response) => {
					if (response.ok === true) {
						return this.$store.dispatch('AccountSettings/UPDATE_PROFILE_URL', null)
					} else {
						reject(`Failed to delete the ${imageFile}`)
					}
				}).then(() => {
					resolve()
				})
			})
		},
		goToAccountUpdateSuccessfulModal() {
			this.$customModal.show(
				AccountUpdateSuccessfulModal, {}, {
					width: '50%',
					clickToClose: false
				}
			)
		},
		submit() {
			this.$store.commit('Common/SHOW_BASE_LOADER', true)
			if (!this.$store.state.AccountSettings.account.profileURL && this.fileObject) {
				this.uploadProfile(this.fileObject).then((profileURL) => {
					this.file = profileURL
					this.goToAccountUpdateSuccessfulModal()
				}, (error) => {
					this.showError = true
					this.errorMessage = error
				}).finally(() => {
					this.$store.commit('Common/SHOW_BASE_LOADER', false)
				})
			} else if (this.$store.state.AccountSettings.account.profileURL && this.fileObject) {
				this.deleteFile(this.$store.state.AccountSettings.account.profileURL.substring(this.$store.state.AccountSettings.account.profileURL.lastIndexOf('/') + 1)).then(() => {
					return this.uploadProfile(this.fileObject)
				}).then((profileURL) => {
					this.file = profileURL
					this.goToAccountUpdateSuccessfulModal()
				}).catch((error) => {
					this.showError = true
					this.errorMessage = error
				}).finally(() => {
					this.$store.commit('Common/SHOW_BASE_LOADER', false)
				})
			} else if (this.$store.state.AccountSettings.account.profileURL && !this.file) {
				this.deleteFile(this.$store.state.AccountSettings.account.profileURL.substring(this.$store.state.AccountSettings.account.profileURL.lastIndexOf('/') + 1)).then(() => {
					this.goToAccountUpdateSuccessfulModal()
				}).catch((error) => {
					this.showError = true
					this.errorMessage = error
				}).finally(() => {
					this.$store.commit('Common/SHOW_BASE_LOADER', false)
				})
			} else {
				this.$store.commit('Common/SHOW_BASE_LOADER', false)
			}
		},
		save() {
			if (!this.isComplete) return
			this.$validator.validateAll().then(result => {
				if (result) {
					this.$store.commit('Common/SHOW_BASE_LOADER', true)

					this.inputs.account.dob = moment(this.inputs.account.dob).format('YYYY-MM-DD')

					this.$store.dispatch('AccountSettings/UPDATE_USER_DETAILS', {
						'userObj': this.inputs.account,
						'userId': this.userId
					}).then(() => {
						this.$store.commit('Common/SHOW_BASE_LOADER', false)
						this.goToAccountUpdateSuccessfulModal()
					})
				}
			})
		}
	}
}
