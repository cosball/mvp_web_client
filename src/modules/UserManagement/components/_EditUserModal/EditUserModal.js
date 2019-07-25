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
					email: this.$store.state.UserManagement.user.email,
					username: this.$store.state.UserManagement.user.username,
					country: this.$store.state.UserManagement.user.country,
					raceId: this.$store.state.UserManagement.user.raceId,
					dob: this.$store.state.UserManagement.user.dob,
					gender: this.$store.state.UserManagement.user.gender,
					toImprove: this.$store.state.UserManagement.user.toImprove,
					ongoingProblems: this.$store.state.UserManagement.user.ongoingProblems,
					roleType: this.$store.state.UserManagement.user.roleType
				}
			},
			roleList: this.$store.state.Common.roleList
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
		closeModal() {
			this.$store.commit('UserManagement/SET_USER_MANAGEMENT_DATA_UPDATED', false)
			this.$store.commit('UserManagement/SET_USER', {})
			this.$emit('close')
		}
	},
	mounted() {
		EventBusService.$on('CLOSE_CUSTOM_MODAL', this.closeModal)
	},
	beforeDestroy() {
		EventBusService.$off('CLOSE_CUSTOM_MODAL', this.closeModal)
	}
}
