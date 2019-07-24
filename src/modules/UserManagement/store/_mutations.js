export default {
	SET_USER: (state, user) => {
		state.user.firstname = user.firstname !== undefined ? user.firstname : ''
		state.user.lastname = user.lastname !== undefined ? user.lastname : ''
		state.user.email = user.email !== undefined ? user.email : ''
		state.user.username = user.username !== undefined ? user.username : ''
		state.user.institutionId = user.institutionId !== undefined ? user.institutionId : null
		state.user.institutionName = user.institutionName !== undefined ? user.institutionName : ''
		state.user.institutionShortName = user.institutionShortName !== undefined ? user.institutionShortName : ''
		state.user.institutionAddress = user.institutionAddress !== undefined ? user.institutionAddress : ''
		state.user.posTitle = user.posTitle !== undefined ? user.posTitle : ''
		state.user.roleType = user.roleType !== undefined ? user.roleType : null
		state.user.contactNo = user.contactNo !== undefined ? user.contactNo : ''
	},
	SET_ROUTE_LEAVE_GUARD_ACTIVE: (state, active) => {
		state.isRouteLeaveGuardActive = active
	},
	SET_USER_MANAGEMENT_DATA_UPDATED: (state, updated) => {
		state.userManagementDataUpdated = updated
	}
}
