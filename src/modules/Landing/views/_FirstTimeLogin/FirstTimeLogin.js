import {
	LayoutContainer,
	CustomButton
} from '@/modules/Common/components'

import {
	RouteService
} from '@/modules/Common/services'

import VueRecaptcha from 'vue-recaptcha'

export default {
	name: 'first-time-login',
	components: {
		LayoutContainer,
		CustomButton,
		VueRecaptcha
	},
	props: {},
	computed: {
		isComplete() {
			let isValid = true
			Object.keys(this.inputs.setNewPassword).forEach((key, value) => {
				if (!this.inputs.setNewPassword[key]) {
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
				setNewPassword: {
					temporaryPassword: '',
					newPassword: '',
					confirmPassword: ''
				}
			},
			recaptchaToken: '',
			recaptcha_sitekey: process.env.VUE_APP_SITEKEY
		}
	},
	methods: {
		submitPassword() {
			if (!this.isComplete) return
			this.$validator.validateAll().then(result => {
				if (result) {
					this.changePassword()
				}
			})
		},
		onVerify(recaptchaToken) {
			this.recaptchaToken = recaptchaToken
		},
		goToLanding() {
			RouteService.push({
				name: 'landing'
			})
		},
		changePassword() {
			this.$store.commit('Common/SHOW_BASE_LOADER', true)
			this.$store.dispatch('Landing/CHANGE_PASSWORD', {
				'oldPassword': this.inputs.setNewPassword.temporaryPassword,
				'newPassword': this.inputs.setNewPassword.newPassword
			}).then(() => {
				this.$store.dispatch('Common/RESET_STATE')
				this.$store.dispatch('AccountSettings/RESET_STATE')
				RouteService.push({
					name: 'firstTimeLoginMessageSuccess'
				})
				this.$store.commit('Common/SHOW_BASE_LOADER', false)
			})
		}
	}
}
