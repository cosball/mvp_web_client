import {
	LayoutContainer,
	CustomButton
} from '@/modules/Common/components'

import {
	RouteService
} from '@/modules/Common/services'

export default {
	name: 'temp-passsword-expired',
	components: {
		LayoutContainer,
		CustomButton
	},
	computed: {
		isComplete() {
			let isValid = true
			Object.keys(this.inputs.temPasswordExpired).forEach((key, value) => {
				if (!this.inputs.temPasswordExpired[key]) {
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
				temPasswordExpired: {
					email: ''
				}
			}
		}
	},
	methods: {
		submitButton() {
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
			this.$store.dispatch('Landing/UPDATE_USER_PASSWORD', this.inputs.temPasswordExpired.email).then(() => {
				RouteService.push({
					name: 'newPasswordSent',
					params: {
						email: this.inputs.temPasswordExpired.email
					}
				})
				this.$store.commit('Common/SHOW_BASE_LOADER', false)
			})
		}
	}
}
