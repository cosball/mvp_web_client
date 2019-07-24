import {
	BaseModal,
	CustomButton
} from '@/modules/Common/components'

import {
	EventBusService
} from '@/modules/Common/services'

export default {
	components: {
		'base-modal': BaseModal,
		CustomButton
	},
	props: {
		action: {
			type: String,
			default: 'add'
		}
	},
	computed: {

	},
	data() {
		return {

		}
	},
	methods: {
		closeModal() {
			this.$emit('close')
		}
	},
	created() {

	},
	mounted() {
		EventBusService.$on('CLOSE_CUSTOM_MODAL', this.closeModal)
	},
	beforeDestroy() {
		EventBusService.$off('CLOSE_CUSTOM_MODAL', this.closeModal)
	}
}
