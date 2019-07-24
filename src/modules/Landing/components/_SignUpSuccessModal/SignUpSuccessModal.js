import {
	BaseModal,
	CustomButton
} from '@/modules/Common/components'

import {
	RouteService,
	EventBusService
} from '@/modules/Common/services'

export default {
	components: {
		'base-modal': BaseModal,
		CustomButton
	},
	props: {},
	computed: {
	},
	data() {
		return {}
	},
	methods: {
		closeModal() {
			this.$emit('close')
		},
		goToLanding() {
			this.$emit('close')
			RouteService.push({
				name: 'landing'
			})
		}
	},
	mounted() {
		EventBusService.$on('CLOSE_CUSTOM_MODAL', this.closeModal)
	},
	beforeDestroy() {
		EventBusService.$off('CLOSE_CUSTOM_MODAL', this.closeModal)
	}
}
