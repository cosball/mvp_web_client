import {
	LayoutContainer,
	CustomButton
} from '@/modules/Common/components'

import {
	UploadFileService,
	AwsService
} from '@/modules/Common/services'

import {
	AccountUpdateSuccessfulModal
} from '@/modules/AccountSettings/components'

export default {
	name: 'account-settings',
	components: {
		LayoutContainer,
		CustomButton
	},
	data() {
		return {
			showError: false,
			errorMessage: false,
			file: this.$store.state.AccountSettings.account.profileURL,
			fileObject: null,
			S3Client: AwsService.uploadFileS3('Profile-Images'),
			account: {
			},
			textRace: ''
		}
	},
	created() {
		Promise.all([this.$store.dispatch('Common/GET_RACE_DATA')]).then((results) => {
			for (let elm of results[0].data) {
				if (elm.value === this.$store.state.AccountSettings.account.raceId) {
					this.textRace = elm.text
					break
				}
			}
			return Promise.resolve()
		}).then(() => {
		})
	},
	methods: {
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
					return this.$store.dispatch('AccountSettings/UPDATE_USER_DETAILS', data.location)
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
						return this.$store.dispatch('AccountSettings/UPDATE_USER_DETAILS', null)
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
		}
	}
}
