import {
	LayoutContainer,
	CustomButton
} from '@/modules/Common/components'

import {
	PaginationTableService,
	EventBusService
} from '@/modules/Common/services'

import {
	AddUserModal,
	EditUserModal
} from '@/modules/UserManagement/components'

export default {
	name: 'user-management',
	components: {
		LayoutContainer,
		CustomButton
	},
	data() {
		return {
			pageOptions: PaginationTableService.getRecordsPerPage(),
			currentPage: 1,
			userManagementList: [],
			fields: [{
					key: 'firstname',
					label: 'First Name',
					sortable: true
				},
				{
					key: 'lastname',
					label: 'Last Name',
					sortable: true
				},
				{
					key: 'email',
					label: 'Email',
					sortable: true
				},
				{
					key: 'username',
					label: 'User Name',
					sortable: true
				},
				{
					key: 'institutionShortName',
					label: 'Company Name',
					sortable: true
				},
				{
					key: 'contactNo',
					label: 'Contact Number',
					sortable: true
				},
				{
					key: 'roleType',
					label: 'Roles',
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
			// navigation guard
			isRouteLeaveGuardActive: false
		}
	},
	mounted() {
		this.getUserManagementList()
	},
	methods: {
		getUserManagementList() {
			this.$store.commit('Common/SHOW_BASE_LOADER', true)
			this.$store.dispatch('UserManagement/GET_USER_MANAGEMENT_LIST')
				.then((result) => {
					this.userManagementList = result
					this.totalRows = result.length
					this.onChangeRecordPerPage()
					this.$store.commit('Common/SHOW_BASE_LOADER', false)
				})
		},
		addNewUser() {
			this.$store.commit('UserManagement/SET_ROUTE_LEAVE_GUARD_ACTIVE', true)
			this.$customModal.show(
				AddUserModal, { foo: 'bar' }, {
					width: '80%',
					clickToClose: false
				}, {
					'before-close': () => {
						if (this.$store.state.UserManagement.userManagementDataUpdated) {
							this.getUserManagementList()
						}
						this.$store.commit('UserManagement/SET_ROUTE_LEAVE_GUARD_ACTIVE', false)
					}
				}
			)
		},
		editUser(item) {
			this.$store.commit('UserManagement/SET_ROUTE_LEAVE_GUARD_ACTIVE', true)
			this.$store.commit('UserManagement/SET_USER', item)
			this.$customModal.show(
				EditUserModal, {
					userId: item.id
				}, {
					width: '80%',
					clickToClose: false
				}, {
					'before-close': () => {
						if (this.$store.state.UserManagement.userManagementDataUpdated) {
							this.getUserManagementList()
						}
						this.$store.commit('UserManagement/SET_ROUTE_LEAVE_GUARD_ACTIVE', false)
					}
				}
			)
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
		}
	},
	beforeRouteLeave(to, from, next) {
		if (this.$store.state.UserManagement.isRouteLeaveGuardActive) {
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
	}
}
