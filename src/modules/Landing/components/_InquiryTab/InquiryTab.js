import {
	CustomButton
} from '@/modules/Common/components'

import InquirySuccessModal from '../_InquirySuccessModal/InquirySuccessModal.vue'

import VueRecaptcha from 'vue-recaptcha'

import {
	UploadFileService,
	AwsService
} from '@/modules/Common/services'

export default {
	components: {
		CustomButton,
		InquirySuccessModal,
		VueRecaptcha
	},
	props: {},
	name: 'inquiry-tab',
	computed: {
		isComplete() {
			let isValid = true
			Object.keys(this.inputs.inquiry).forEach((key, value) => {
				if (!this.inputs.inquiry[key]) {
					isValid = false
					return false
				}
			})
			return isValid && Boolean(this.recaptchaToken)
		}
	},
	data() {
		return {
			inputs: {
				inquiry: {
					full_name: '',
					email: '',
					message: ''
				}
			},
			file: null,
			fileDropped: false,
			showError: false,
			errorMessage: '',
			recaptchaToken: '',
			recaptcha_sitekey: process.env.VUE_APP_SITEKEY,
			S3Client: AwsService.uploadFileS3('Support'),
		}
	},
	methods: {
		uploadAttachment(fileObject) {
			return new Promise((resolve, reject) => {
				this.S3Client.uploadFile(fileObject).then((data) => {
					return this.$store.dispatch('Landing/CONTACT_US', {
						'fullname': this.inputs.inquiry.full_name,
						'email': this.inputs.inquiry.email,
						'category': 'inquiry',
						'message': this.inputs.inquiry.message,
						'attachment': data.location
					})
				}).then(() => {
					resolve()
				}).catch((error) => {
					reject(error)
				})
			})
		},
		closeModal() {
			this.$emit('close')
		},
		onVerify(recaptchaToken) {
			this.recaptchaToken = recaptchaToken
		},
		submitInquiry() {
			if (!this.isComplete) return
			this.$validator.validateAll().then(result => {
				if (result) {
					this.$store.commit('Common/SHOW_BASE_LOADER', true)
					this.uploadAttachment(this.file).then(() => {
						this.$store.commit('Common/SHOW_BASE_LOADER', false)
						this.resetForm()
						this.$emit('close')
						this.$customModal.show(
							InquirySuccessModal, {}, {
								width: '50%',
								clickToClose: false
							}
						)
					})
				}
			})
		},
		uploadFile() {
			this.$refs['file-input'].$el.querySelector('input[type=file]').click()
		},
		validateUploadedFile(file) {
			this.$store.commit('Common/SHOW_BASE_LOADER', true)
			UploadFileService.checkFileSize(file, process.env.VUE_APP_CONTACT_US_FILE_SIZE).then(() => {
				this.fileDropped = true
				this.file = file
			}).catch((error) => {
				this.showError = true
				this.errorMessage = error
			}).finally(() => {
				this.$store.commit('Common/SHOW_BASE_LOADER', false)
			})
		},
		browseFile(e) {
			this.validateUploadedFile(e.target.files[0])
			this.$refs['file-input'].$el.querySelector('input[type=file]').value = ''
		},
		resetFile() {
			this.fileDropped = false
			this.file = null
		},
		resetForm() {
			Object.keys(this.inputs.inquiry).forEach((key) => {
				this.inputs.inquiry[key] = ''
			})
			this.showError = false
			this.errorMessage = ''
			this.recaptchaToken = ''
			this.$refs.recaptcha.reset()
			this.$validator.reset()
			this.resetFile()
		}
	},
	mounted() {}
}
