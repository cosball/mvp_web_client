import {
	BaseModal,
	CustomButton
} from '@/modules/Common/components'

import {
	EventBusService
} from '@/modules/Common/services'

import UserUpdateCreateSuccessfulModal from '@/modules/UserManagement/components/_UserUpdateCreateSuccessfulModal/UserUpdateCreateSuccessfulModal.vue'

export default {
	components: {
		'base-modal': BaseModal,
		CustomButton
	},
	props: {
		userId: String
	},
	computed: {
		isComplete() {
			let isValid = true
			Object.keys(this.inputs.user).forEach((key, value) => {
				if (key !== 'posTitle' && !this.inputs.user[key]) {
					isValid = false
					return false
				}
			})
			return isValid
		}
	},
	data() {
		return {
			title: 'Edit User',
			inputs: {
				user: {
					firstname: this.$store.state.UserManagement.user.firstname,
					lastname: this.$store.state.UserManagement.user.lastname,
					email: this.$store.state.UserManagement.user.email,
					username: this.$store.state.UserManagement.user.username,
					institutionId: this.$store.state.UserManagement.user.institutionId,
					institutionAddress: this.$store.state.UserManagement.user.institutionAddress,
					institutionName: this.$store.state.UserManagement.user.institutionName,
					institutionShortName: this.$store.state.UserManagement.user.institutionShortName,
					posTitle: this.$store.state.UserManagement.user.posTitle,
					roleType: this.$store.state.UserManagement.user.roleType,
					contactNo: this.$store.state.UserManagement.user.contactNo
				}
			},
			roleList: this.$store.state.Common.roleList,
			originalInstitutionList: [],
			institutionList: []
		}
	},
	methods: {
		editUser() {
			if (!this.isComplete) return
			this.$validator.validateAll().then(result => {
				if (result) {
					this.$store.commit('Common/SHOW_BASE_LOADER', true)
					this.$store.dispatch('UserManagement/UPDATE_USER_DETAILS', {
						'userObj': this.inputs.user,
						'userId': this.userId
					}).then(() => {
						this.$store.commit('Common/SHOW_BASE_LOADER', false)
						this.$store.commit('UserManagement/SET_ROUTE_LEAVE_GUARD_ACTIVE', true)
						this.$store.commit('UserManagement/SET_USER_MANAGEMENT_DATA_UPDATED', true)
						this.$emit('close')
						this.$customModal.show(
							UserUpdateCreateSuccessfulModal, {
								action: 'update'
							}, {
								width: '50%',
								clickToClose: false
							}, {
								'before-close': () => {
									this.$store.commit('UserManagement/SET_USER', {})
									this.$store.commit('UserManagement/SET_ROUTE_LEAVE_GUARD_ACTIVE', false)
									this.$store.commit('UserManagement/SET_USER_MANAGEMENT_DATA_UPDATED', false)
								}
							}
						)
					})
				}
			})
		},
		onInstitutionIdChange() {
			let obj = this.originalInstitutionList.find((element) => element.id === this.inputs.user.institutionId)
			this.inputs.user.institutionAddress = obj.institutionAddress
			this.inputs.user.institutionName = obj.institutionName
			this.inputs.user.institutionShortName = obj.institutionShortName
		},
		closeModal() {
			this.$store.commit('UserManagement/SET_USER_MANAGEMENT_DATA_UPDATED', false)
			this.$store.commit('UserManagement/SET_USER', {})
			this.$emit('close')
		}
	},
	mounted() {
		this.originalInstitutionList = this.$store.state.Common.institutionsList
		this.institutionList = this.originalInstitutionList.map((value, key) => {
			return {
				text: value.institutionName,
				value: value.id
			}
		})
		this.onInstitutionIdChange()
		EventBusService.$on('CLOSE_CUSTOM_MODAL', this.closeModal)
	},
	beforeDestroy() {
		EventBusService.$off('CLOSE_CUSTOM_MODAL', this.closeModal)
	}
}
