import CustomButton from '@/modules/Common/components/_CustomButton/CustomButton.vue'

import {
	RouteService,
	EventBusService
} from '@/modules/Common/services'

export default {
	name: 'page-header',
	components: {
		CustomButton
	},
	data() {
		return {
			addressTransactionHash: '',
			filterBy: '',
			roleLabel: '',
			filterByList: [{
				value: 'transaction_hash',
				text: 'Transaction Hash'
			}].concat(this.$store.state.Common.cryptoCurrencyList)
		}
	},
	mounted() {
		let obj = this.$store.state.Common.roles.filter((value) => value.value === this.$store.state.AccountSettings.account.roleType)
		this.roleLabel = obj && obj.length > 0 ? obj[0].text : 'Super Admin'
		this.filterBy = this.filterByList[0].value
	},
	methods: {
		goToAccountSettings() {
			RouteService.push({
				name: 'accountSettings'
			})
		},
		goToLanding() {
			RouteService.push({
				name: 'landing'
			})
		},
		goToTransactionDetail() {
			if (this.filterBy === this.filterByList[0].value && this.addressTransactionHash) {
				this.$store.commit('Common/SHOW_BASE_LOADER', true)
				this.$store.commit('TransactionDetails/SET_TRANSACTION_HASH', this.addressTransactionHash)
				this.$store.dispatch('TransactionDetails/GET_TRANSACTION_DETAILS')
					.then((result) => {
						this.$store.commit('TransactionDetails/SET_TRANSACTION_DETAILS', result)
						RouteService.push({
							name: 'transactionDetails'
						})
					}, () => {
						this.$store.commit('TransactionDetails/SET_TRANSACTION_DETAILS', null)
						this.$store.commit('TransactionDetails/SET_TRANSACTION_HASH', '')
					}).finally(() => {
						this.$store.commit('Common/SHOW_BASE_LOADER', false)
					})
			} else {
				if (this.$route.name !== 'SkinData') {
					RouteService.push({
						name: 'SkinData',
						params: {
							address: this.addressTransactionHash,
							addressType: this.filterBy
						}
					})
				} else {
					EventBusService.$emit('TRIGGER_SKINDATA_FILTER', {
						address: this.addressTransactionHash,
						addressType: this.filterBy
					})
				}
				this.filterBy = this.filterByList[0].value
				this.addressTransactionHash = ''
			}
		},
		logout() {
			this.$store.commit('Common/SHOW_BASE_LOADER', true)
			this.$store.dispatch('Common/LOGOUT')
				.then(() => {
					this.$store.commit('Common/SHOW_BASE_LOADER', false)
				})
		}
	}
}
