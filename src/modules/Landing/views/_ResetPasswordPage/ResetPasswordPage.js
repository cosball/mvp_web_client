import {
	LayoutContainer,
	CustomButton
} from '@/modules/Common/components'

import {
	RouteService
} from '@/modules/Common/services'

export default {
	name: 'reset-password-page',
	components: {
		LayoutContainer,
		CustomButton
	},
	props: {},
	computed: {
		isComplete() {
			let isValid = true
			Object.keys(this.inputs.resetPassword).forEach((key, value) => {
				if (!this.inputs.resetPassword[key]) {
					isValid = false
					return false
				}
			})
			return isValid
		}
	},
	data() {
		return {
			inputs: {
				resetPassword: {
					newPassword: '',
					confirmPassword: ''
				}
			}
		}
	},
	methods: {
		passwordResetMessage() {
			if (!this.isComplete) return
			this.$validator.validateAll().then(result => {
				if (result) {
					this.resetPassword()
				}
			})
		},
		goToLanding() {
			RouteService.push({
				name: 'landing'
			})
		},
		resetPassword() {
			this.$store.commit('Common/SHOW_BASE_LOADER', true)
			this.$store.dispatch('Landing/SET_NEW_PASSWORD', {
				'newPassword': this.inputs.resetPassword.confirmPassword
			}).then(() => {
				this.$store.commit('Common/SET_ACCESS_TOKEN', '')
				RouteService.push({
					name: 'resetMessagePage'
				})
				this.$store.commit('Common/SHOW_BASE_LOADER', false)
			})
		}
	},
	mounted() {
		this.$store.commit('Common/SET_ACCESS_TOKEN', this.$route.query.access_token)
	}
}
