import {
	BaseModal,
	CustomButton
} from '@/modules/Common/components'

export default {
	components: {
		'base-modal': BaseModal,
		CustomButton
	},
	props: {},
	computed: {},
	data() {
		return {}
	},
	methods: {
		closeModal() {
			this.$emit('close')
		}
	},
	mounted() {}
}
