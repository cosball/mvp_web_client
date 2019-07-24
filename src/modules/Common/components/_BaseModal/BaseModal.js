import CustomButton from '@/modules/Common/components/_CustomButton/CustomButton.vue'

import {
	EventBusService
} from '@/modules/Common/services'

export default {
	name: 'base-modal',
	components: {
		CustomButton
	},
	props: {
		// passing in data for default view
		title: String,
		body: String,
		buttonList: Array,
		showFooter: {
			type: Boolean,
			default: false
		},
		showHeader: {
			type: Boolean,
			default: false
		},
		hideCloseButton: Boolean,
		bgVariantImage: Boolean, // currently only $primary color background
		headerBgVariant: Boolean // currently only $primary color background
	},
	computed: {
		hasHeader() {
			return Boolean(this.$slots.header) || this.showHeader
		},
		hasFooter() {
			return Boolean(this.$slots.footer) || this.showFooter
		}
	},
	methods: {
		closeModal() {
			this.$emit('close')
		}

	},
	mounted() {
		EventBusService.$on('CLOSE_MODAL', this.closeModal)
		if (this.buttonList) {
			this.buttonList.forEach((button, index) => {
				button.id = index + 1
			})
		}
	},
	destroyed() {
		EventBusService.$off('CLOSE_MODAL', this.closeModal)
	}
}
