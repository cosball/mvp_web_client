
export default {
	SET_ACCOUNT_PROFILE_SETTING: (state, profile) => {
		state.account.firstname = profile.firstname !== undefined ? profile.firstname : ''
		state.account.lastname = profile.lastname !== undefined ? profile.lastname : ''
		state.account.email = profile.email !== undefined ? profile.email : ''
		state.account.posTitle = profile.posTitle !== undefined ? profile.posTitle : ''
		state.account.institutionId = profile.institutionId !== undefined ? profile.institutionId : ''
		state.account.roleType = profile.roleType !== undefined ? profile.roleType : ''
		state.account.posTitle = profile.posTitle !== undefined ? profile.posTitle : ''
		state.account.contactNo = profile.contactNo !== undefined ? profile.contactNo : ''
		state.account.addSkinDataCount = profile.addSkinDataCount !== undefined ? profile.addSkinDataCount : 0
		state.account.upSkinDataCount = profile.upSkinDataCount !== undefined ? profile.upSkinDataCount : 0
		state.account.lastSignIn = profile.lastSignIn !== undefined ? profile.lastSignIn : new Date()
		state.account.passwordChanged = profile.passwordChanged !== undefined ? profile.passwordChanged : false
		state.account.emailVerified = profile.emailVerified !== undefined ? profile.emailVerified : false
		state.account.tempPassExpired = profile.tempPassExpired !== undefined ? profile.tempPassExpired : true
		state.account.firstSignIn = profile.firstSignIn !== undefined ? profile.firstSignIn : true
		state.account.realm = profile.realm !== undefined ? profile.realm : ''
		state.account.username = profile.username !== undefined ? profile.username : ''
		state.account.email = profile.email !== undefined ? profile.email : ''
		state.account.id = profile.id !== undefined ? profile.id : ''
		state.account.profileURL = profile.profileURL !== undefined ? profile.profileURL : ''
	},
	SET_ACCOUNT_PROFILE_IMAGE: (state, profileURL) => {
		state.account.profileURL = profileURL !== null ? profileURL : null
	},
	SET_ACCOUNT_ADD_SKINDATA_COUNT: (state, addSkinDataCount) => {
		state.account.addSkinDataCount = addSkinDataCount
	},
	SET_ACCOUNT_UPLOAD_SKINDATA_COUNT: (state, upSkinDataCount) => {
		state.account.upSkinDataCount = upSkinDataCount
	}
}
