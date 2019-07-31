import {
	LayoutContainer,
	CustomButton
} from '@/modules/Common/components'

import {
	PaginationTableService,
	EventBusService,
	RouteService
} from '@/modules/Common/services'

import {
} from '@/modules/RewardHistory/components'

// import {
// 	cloneDeep
// } from 'lodash'

let filterRewardHistoryCallback = null

export default {
	name: 'RewardHistory',
	components: {
		LayoutContainer,
		CustomButton
	},
	data() {
		return {
			filter: {
				filterByList: [],
				filterSearch: '',
				filterFieldOptionsList: [{
					text: 'Type',
					value: 'message.tx_type'
				}],
				selectedFilterField: ''
			},
			pageOptions: PaginationTableService.getRecordsPerPage(),
			currentPage: 1,
			filteredRewardHistory: [],
			fields: [
				{
					key: 'deadline',
					label: 'Date/Time',
					sortable: true
				},
				{
					key: 'message.tx_type',
					label: 'Reward Type',
					sortable: true
				},
				{
					key: 'amount',
					label: 'Amount',
					sortable: true
				}
			],
			pageList: [],
			perPage: PaginationTableService.getRecordsPerPage()[0],
			totalRows: 0,
			entriesTxt: '',
			filterQuery: null,
			// navigation guard
			isRouteLeaveGuardActive: false
		}
	},
	computed: {
	},
	mounted() {
		if (this.$route.params.address) {
			this.triggerRewardHistoryFilterViaParam(this.$route.params)
		} else {
			this.triggerRewardHistoryFilterViaParam(null)
		}
		filterRewardHistoryCallback = (payload) => {
			console.log()
			this.triggerRewardHistoryFilterViaParam(payload)
		}
		EventBusService.$on('TRIGGER_SKINDATA_FILTER', filterRewardHistoryCallback)
	},
	methods: {
		triggerRewardHistoryFilterViaParam(params) {
			if (params && params.address) {
				this.filter.filterByList = []
				this.filter.filterByList.push({
					filterSearch: params.address,
					field: 'address',
					fieldLabel: this.filter.filterFieldOptionsList.find((item) => item.value === 'address').text
				}, {
						filterSearch: params.addressType,
						field: 'addressType',
						fieldLabel: this.filter.filterFieldOptionsList.find((item) => item.value === 'addressType').text
					})
				this.setDefaultFilterValue()
				this.filterRewardHistoryTable()
			} else {
				this.getNEMTransactions()
			}
		},
		getNEMTransactions() {
			return new Promise((resolve, reject) => {
				this.$store.commit('Common/SHOW_BASE_LOADER', true)
				this.$store.dispatch('RewardHistory/GET_TRANS_LIST', this.filterQuery)
					.then((result) => {
						this.filteredRewardHistory = result
						this.resetTablePagination()
						this.setDefaultFilterValue()
						this.$store.commit('Common/SHOW_BASE_LOADER', false)
						resolve()
					})
			})
		},
		setDefaultFilterValue() {
			this.filter.selectedFilterField = this.filter.filterFieldOptionsList[0].value
		},
		showEntriesTxt() {
			this.entriesTxt = PaginationTableService.getEntriesText(this.currentPage, this.perPage, this.totalRows)
		},
		onChangeRecordPerPage() {
			this.pageList = PaginationTableService.getPageList(this.totalRows, this.perPage)
			this.showEntriesTxt()
		},
		onChangeTablePagination() {
			this.showEntriesTxt()
		},
		onFilter() {
			if (this.filter.filterSearch) {
				this.filter.filterByList.push({
					filterSearch: this.filter.filterSearch,
					field: this.filter.selectedFilterField,
					fieldLabel: this.filter.filterFieldOptionsList.find((item) => item.value === this.filter.selectedFilterField).text
				})
				this.filter.filterSearch = ''
				this.setDefaultFilterValue()
				this.filterRewardHistoryTable()
			}
		},
		filterRewardHistoryTable() {
			this.filterQuery = null
			if (this.filter.filterByList.length > 0) {
				this.filterQuery = {
					'where': {
						'and': []
					}
				}
				this.filter.filterByList.forEach(element => {
					if (element.filterSearch) {
						let obj = {
							[element.field]: {
								'regexp': `/^${element.filterSearch}/i`,
							}
						}
						this.filterQuery.where.and.push(obj)
					}
				})
			}

			this.getNEMTransactions().then(() => {
				this.resetTablePagination()
			})
		},
		resetTableListConfiguration() {
			this.getNEMTransactions(null).then(() => {
				this.filter.filterByList = []
				this.filter.filterSearch = ''
				this.resetTablePagination()
				this.setDefaultFilterValue()
			})
		},
		resetTablePagination() {
			this.totalRows = this.filteredRewardHistory.length
			this.onChangeRecordPerPage()
		},
		deleteFilter(idx) {
			this.filter.filterByList.splice(idx, 1)
			this.filterRewardHistoryTable()
		},
		goToTransactionDetails(item) {
			this.$store.commit('Common/SHOW_BASE_LOADER', true)
			this.$store.commit('TransactionDetails/SET_TRANSACTION_HASH', item.transaction_hash)
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
		}
	},
	beforeRouteLeave(to, from, next) {
		if (this.$store.state.RewardHistory.isRouteLeaveGuardActive) {
			let confirmLeaving = confirm('Current changes will be lost. Proceed anyway?')
			if (confirmLeaving) {
				EventBusService.$emit('CLOSE_CUSTOM_MODAL')
				next()
			} else {
				next(false)
			}
		} else {
			next()
		}
	},
	beforeDestroy() {
		EventBusService.$off('TRIGGER_SKINDATA_FILTER', filterRewardHistoryCallback)
	}
}
