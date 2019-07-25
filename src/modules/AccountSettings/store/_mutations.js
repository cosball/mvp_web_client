
export default {
	SET_ACCOUNT_PROFILE_SETTING: (state, profile) => {
		state.account.email = profile.email !== undefined ? profile.email : ''
		state.account.username = profile.username !== undefined ? profile.username : ''
		state.account.country = profile.country !== undefined ? profile.country : ''
		state.account.raceId = profile.raceId !== undefined ? profile.raceId : ''
		state.account.dob = profile.dob !== undefined ? profile.dob : ''
		state.account.gender = profile.gender !== undefined ? profile.gender : ''
		state.account.toImprove = profile.toImprove !== undefined ? profile.toImprove : ''
		state.account.ongoingProblems = profile.ongoingProblems !== undefined ? profile.ongoingProblems : ''
		state.account.roleType = profile.roleType !== undefined ? profile.roleType : ''
		state.account.createdAt = profile.createdAt !== undefined ? profile.createdAt : new Date()
		state.account.updatedAt = profile.updatedAt !== undefined ? profile.updatedAt : new Date()
		state.account.tempPassExpired = profile.tempPassExpired !== undefined ? profile.tempPassExpired : true
		state.account.realm = profile.realm !== undefined ? profile.realm : ''
		state.account.id = profile.id !== undefined ? profile.id : ''
		state.account.profileURL = profile.profileURL !== undefined ? profile.profileURL : ''
		state.account.passwordChanged = profile.passwordChanged !== undefined ? profile.passwordChanged : false
		state.account.emailVerified = profile.emailVerified !== undefined ? profile.emailVerified : false
		state.account.firstSignIn = profile.firstSignIn !== undefined ? profile.firstSignIn : true
	},
	SET_ACCOUNT_PROFILE_IMAGE: (state, profileURL) => {
		state.account.profileURL = profileURL !== null ? profileURL : null
	}
}
