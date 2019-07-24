import {
	LayoutContainer,
	CustomButton,
	GotoTop
} from '@/modules/Common/components'

import {
	RouteService
} from '@/modules/Common/services'

import {
	LandingHeader,
	LandingFooter
} from '@/modules/Landing/components'

export default {
	name: 'TermsConditions',
	components: {
		LayoutContainer,
		CustomButton,
		LandingHeader,
		LandingFooter,
		GotoTop
	},
	data() {
		return {}
	},
	methods: {
		sendEmail() {
			var mail = document.createElement('a')
			mail.href = 'mailto:hello@cosball.io'
			mail.click()
			mail.remove()
		},
		privacy() {
			RouteService.push({
				name: 'privacy'
			})
		}
	}
}
