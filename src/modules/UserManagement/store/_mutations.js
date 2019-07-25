export default {
	SET_USER: (state, user) => {
		state.user.email = user.email !== undefined ? user.email : ''
		state.user.username = user.username !== undefined ? user.username : ''
		state.user.country = user.country !== undefined ? user.country : ''
		state.user.raceId = user.raceId !== undefined ? user.raceId : ''
		state.user.dob = user.dob !== undefined ? user.dob : ''
		state.user.gender = user.gender !== undefined ? user.gender : ''
		state.user.toImprove = user.toImprove !== undefined ? user.toImprove : ''
		state.user.ongoingProblems = user.ongoingProblems !== undefined ? user.ongoingProblems : ''
		state.user.roleType = user.roleType !== undefined ? user.roleType : ''
		state.user.createdAt = user.createdAt !== undefined ? user.createdAt : new Date()
		state.user.updatedAt = user.updatedAt !== undefined ? user.updatedAt : new Date()
		state.user.tempPassExpired = user.tempPassExpired !== undefined ? user.tempPassExpired : true
		state.user.realm = user.realm !== undefined ? user.realm : ''
		state.user.id = user.id !== undefined ? user.id : ''
		state.user.userURL = user.userURL !== undefined ? user.userURL : ''
		state.user.passwordChanged = user.passwordChanged !== undefined ? user.passwordChanged : false
		state.user.emailVerified = user.emailVerified !== undefined ? user.emailVerified : false
		state.user.firstSignIn = user.firstSignIn !== undefined ? user.firstSignIn : true
	},
	SET_ROUTE_LEAVE_GUARD_ACTIVE: (state, active) => {
		state.isRouteLeaveGuardActive = active
	},
	SET_USER_MANAGEMENT_DATA_UPDATED: (state, updated) => {
		state.userManagementDataUpdated = updated
	}
}
