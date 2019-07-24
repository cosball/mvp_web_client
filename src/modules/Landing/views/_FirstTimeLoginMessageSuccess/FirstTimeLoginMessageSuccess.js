import {
	LayoutContainer
} from '@/modules/Common/components'

import {
	RouteService
} from '@/modules/Common/services'

export default {
	name: 'first-time-login-message-success',
	components: {
		LayoutContainer
	},
	data() {
		return {

		}
	},
	methods: {
		goToLanding() {
			RouteService.push({
				name: 'landing'
			})
		}
	}
}
