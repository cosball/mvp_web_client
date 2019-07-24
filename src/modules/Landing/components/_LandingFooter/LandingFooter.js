import {
	CustomButton
} from '@/modules/Common/components'

import LoginModal from '../_LoginModal/LoginModal.vue'

import {
	RouteService
} from '@/modules/Common/services'

import {
	ContactUsModal
} from '@/modules/Landing/components'

export default {
	name: 'landing-footer',
	components: {
		CustomButton,
		ContactUsModal,
		LoginModal
	},
	data() {
		return {
			year: new Date().getFullYear().toString()
		}
	},
	methods: {
		signUp() {
			RouteService.push({
				name: 'signUp'
			})
		},
		login() {
			this.$customModal.show(
				LoginModal, {}, {
					width: '300px',
					clickToClose: false
				}
			)
		},
		faq() {
			RouteService.push({
				name: 'faq'
			})
		},
		contact() {
			this.$customModal.show(
				ContactUsModal, {}, {
					width: '80%',
					clickToClose: false
				}
			)
		},
		privacy() {
			RouteService.push({
				name: 'privacy'
			})
		},
		termsConditions() {
			RouteService.push({
				name: 'termsConditions'
			})
		}
	}
}
