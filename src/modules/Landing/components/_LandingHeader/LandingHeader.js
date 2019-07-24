import {
	CustomButton
} from '@/modules/Common/components'

import {
	RouteService
} from '@/modules/Common/services'

import LoginModal from '../_LoginModal/LoginModal.vue'

export default {
	name: 'landing-header',
	components: {
		CustomButton,
		LoginModal
	},
	data() {
		return {}
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
		goToLanding() {
			RouteService.push({
				name: 'landing'
			})
		}
	}
}
