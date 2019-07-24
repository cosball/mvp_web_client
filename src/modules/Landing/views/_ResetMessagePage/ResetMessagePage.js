import {
	LayoutContainer
} from '@/modules/Common/components'

import {
	RouteService
} from '@/modules/Common/services'

export default {
	name: 'reset-Message-page',
	components: {
		LayoutContainer
	},
	data() {
		return {}
	},
	methods: {
		goToLanding() {
			RouteService.push({
				name: 'landing'
			})
		}
	}
}
