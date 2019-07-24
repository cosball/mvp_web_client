import {
	BaseModal,
	CustomButton
} from '@/modules/Common/components'

import InquirySuccessModal from '../_InquirySuccessModal/InquirySuccessModal.vue'
import InquiryTab from '../_InquiryTab/InquiryTab.vue'
import SupportTab from '../_SupportTab/SupportTab.vue'

export default {
	components: {
		'base-modal': BaseModal,
		CustomButton,
		InquirySuccessModal,
		InquiryTab,
		SupportTab
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
	mounted() {}
}
