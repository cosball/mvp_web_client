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
	AddSkinDataModal,
	ViewSkinDataModal
} from '@/modules/SkinData/components'

import {
	cloneDeep
} from 'lodash'

let filterSkinDataCallback = null

export default {
	name: 'SkinData',
	components: {
		LayoutContainer,
		CustomButton
	},
	data() {
		return {
			filter: {
				filterByList: [],
				filterSearch: '',
				filterFieldOptionsList: [],
				selectedFilterField: ''
			},
			pageOptions: PaginationTableService.getRecordsPerPage(),
			currentPage: 1,
			filteredSkinData: [],
			fields: [
				{
					key: 'createdAt',
					label: 'Entered At',
					sortable: true
				},
				{
					key: 'moisture',
					label: 'Skin Health',
					sortable: true
				},
				{
					key: 'oil',
					label: 'Blemish',
					sortable: true
				},
				{
					key: 'wrinkle',
					label: 'Wrinkle',
					sortable: true
				},
				{
					key: 'pore',
					label: 'Skin Texture',
					sortable: true
				},
				{
					key: 'skinTone',
					label: 'Dark Circles',
					sortable: true
				},
				{
					key: 'skinTemperature',
					label: 'Skin Age',
					sortable: true
				},
				{
					key: 'actions',
					label: '',
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
			this.triggerSkinDataFilterViaParam(this.$route.params)
		} else {
			this.triggerSkinDataFilterViaParam(null)
		}
		filterSkinDataCallback = (payload) => {
			console.log()
			this.triggerSkinDataFilterViaParam(payload)
		}
		EventBusService.$on('TRIGGER_SKINDATA_FILTER', filterSkinDataCallback)
	},
	methods: {
		triggerSkinDataFilterViaParam(params) {
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
				this.filterSkinDataTable()
			} else {
				this.getSkinData()
			}
		},
		getSkinData(order) {
			return new Promise((resolve, reject) => {
				this.$store.commit('Common/SHOW_BASE_LOADER', true)

				console.log(this.filteredSkinData)
				var txHash
				if (this.filteredSkinData.length > 0 && typeof order !== 'undefined') {
					if (order === 1) {
						txHash = this.filteredSkinData[0].transactionHash
					} else {
						txHash = this.filteredSkinData[this.filteredSkinData.length - 1].transactionHash
					}
				} else {
					txHash = null
				}

				var params = {
					tx_hash: txHash,
					num_of_rows: this.perPage,
					order: order
				}
				this.$store.dispatch('SkinData/GET_SKINDATA_LIST', params)
					.then((result) => {
						this.filteredSkinData = cloneDeep(result)
						this.resetTablePagination()
						this.setDefaultFilterValue()
						this.$store.commit('Common/SHOW_BASE_LOADER', false)
						resolve()
					})
			})
		},
		setDefaultFilterValue() {
			// this.filter.selectedFilterField = this.filter.filterFieldOptionsList[0].value
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
				this.filterSkinDataTable()
			}
		},
		filterSkinDataTable() {
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

			this.getSkinData().then(() => {
				this.resetTablePagination()
			})
		},
		resetTableListConfiguration() {
			this.getSkinData(null).then(() => {
				this.filter.filterByList = []
				this.filter.filterSearch = ''
				this.resetTablePagination()
				this.setDefaultFilterValue()
			})
		},
		resetTablePagination() {
			this.totalRows = this.filteredSkinData.length
			this.onChangeRecordPerPage()
		},
		addNewSkinData() {
			if (this.blockAddingSkinData) return
			this.$store.commit('SkinData/SET_ROUTE_LEAVE_GUARD_ACTIVE', true)
			this.$customModal.show(
				AddSkinDataModal, {}, {
					width: '70%',
					clickToClose: false
				}, {
					'before-close': () => {
						if (this.$store.state.SkinData.skindataDataUpdated) {
							this.getSkinData()
						}
						this.$store.commit('SkinData/SET_ROUTE_LEAVE_GUARD_ACTIVE', false)
					}
				}
			)
		},
		viewSkinData(item) {
			this.$store.commit('SkinData/SET_ROUTE_LEAVE_GUARD_ACTIVE', true)
			this.$store.commit('SkinData/SET_SKINDATA', item)
			this.$customModal.show(
				ViewSkinDataModal, {}, {
					width: '70%',
					clickToClose: false
				}, {
					'before-close': () => {
						if (this.$store.state.SkinData.skindataDataUpdated) {
							this.getSkinData(this.filterQuery)
						}
						this.$store.commit('SkinData/SET_ROUTE_LEAVE_GUARD_ACTIVE', false)
					}
				}
			)
		},
		deleteFilter(idx) {
			this.filter.filterByList.splice(idx, 1)
			this.filterSkinDataTable()
		},
		goToTransactionDetails(item) {
			this.$store.commit('Common/SHOW_BASE_LOADER', true)
			this.$store.commit('TransactionDetails/SET_TRANSACTION_HASH', item.transactionHash)
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
		if (this.$store.state.SkinData.isRouteLeaveGuardActive) {
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
		EventBusService.$off('TRIGGER_SKINDATA_FILTER', filterSkinDataCallback)
	}
}
