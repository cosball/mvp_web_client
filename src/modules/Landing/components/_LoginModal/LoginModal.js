import {
	BaseModal,
	CustomButton
} from '@/modules/Common/components'

import {
	RouteService,
	AppService
} from '@/modules/Common/services'

// import VueRecaptcha from 'vue-recaptcha'

export default {
	components: {
		'base-modal': BaseModal,
		CustomButton,
		// VueRecaptcha
	},
	created() {
		window.addEventListener('keyup', this.triggerLoginViaEnterBtn)
		// this.getCaptcha()
	},
	computed: {
		isComplete() {
			let isValid = true
			Object.keys(this.inputs.login).forEach((key, value) => {
				if (!this.inputs.login[key]) {
					isValid = false
					return false
				}
			})
			return isValid
			// return isValid && this.inputCaptchaText === this.captcha.text
		}
	},
	data() {
		return {
			inputs: {
				login: {
					email_address: '',
					password: ''
				},
			},
			captcha: {},
			inputCaptchaText: ''
		}
	},
	methods: {
		triggerLoginViaEnterBtn(e) {
			var key = e.which || e.keyCode
			if (key === 13) {
				this.login()
			}
		},
		closeModal() {
			this.$emit('close')
		},
		onVerify(recaptchaToken) {
			this.recaptchaToken = recaptchaToken
		},
		getCaptcha() {
			this.$store.dispatch('Common/GET_CAPTCHA').then((results) => {
				this.captcha = results
				console.log(results)
			})
		},
		login() {
			if (!this.isComplete) return
			this.$validator.validateAll().then(result => {
				if (result) {
					this.authenticateUser()
				}
			})
		},
		authenticateUser() {
			this.$store.commit('Common/SHOW_BASE_LOADER', true)
			this.$store.dispatch('Common/AUTHENTICATE_USER', {
					email: this.inputs.login.email_address,
					password: this.inputs.login.password
				})
				.then(() => {
					return this.$store.dispatch('AccountSettings/GET_USER_DETAILS')
				}).then(() => {
					this.$emit('close')
					return RouteService.getLandingRouteByAppState()
				}).then((route) => {
					if (route === 'dashboard') {
						return AppService.loadInitialData().then(() => Promise.resolve(route))
					}
					return route
				}).then((route) => {
					RouteService.push({
						name: route
					})
				}).finally(() => {
					this.$store.commit('Common/SHOW_BASE_LOADER', false)
				})
		},
		signUp() {
			this.$emit('close')
			RouteService.push({
				name: 'signUp'
			})
		},
		forgotPassword() {
			this.$emit('close')
			RouteService.push({
				name: 'forgotPassword'
			})
		}
	},
	beforeDestory() {
		window.removeEventListener('keyup', this.triggerLoginViaEnterBtn)
	}
}
