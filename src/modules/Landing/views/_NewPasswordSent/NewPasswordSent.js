import {
	LayoutContainer
} from '@/modules/Common/components'

import {
	RouteService
} from '@/modules/Common/services'

export default {
	name: 'new-password-sent',
	components: {
		LayoutContainer
	},
	data() {
		return {
			email: 'youremail@email.com'
		}
	},
	methods: {
		goToLanding() {
			RouteService.push({
				name: 'landing'
			})
		},
		forgotPassword() {
			RouteService.push({
				name: 'forgotPassword'
			})
		}
	},
	mounted() {
		if (this.$route.params && this.$route.params.email) {
			this.email = this.$route.params.email
		}
	}
}
