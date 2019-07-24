import {
	LayoutContainer
} from '@/modules/Common/components'

export default {
	name: 'transaction-details',
	components: {
		LayoutContainer
	},
	data() {
		return {
			blockChainData: this.$store.state.TransactionDetails.transactionDetails
		}
	},
	methods: {
		goBack() {
			this.$router.back()
		}
	},
	beforeRouteEnter(to, from, next) {
		next(vm => {
			if (!vm.$store.state.TransactionDetails.transactionHash) {
				vm.goBack()
			}
		})
	}
}
