const defaultState = {
	user: {
		email: '',
		username: '',
		country: '',
		raceId: '',
		dob: '',
		gender: '',
		toImprove: [],
		ongoingProblems: [],
		roleType: '',
		createdAt: new Date(),
		updatedAt: new Date(),
		creator: '',
		updatedBy: '',
		currentSignIn: new Date(),
		lastSignIn: new Date(),
		passwordChanged: false,
		emailVerified: false,
		tempPassExpired: true,
		firstSignIn: false,
		realm: '',
		id: '',
        profileURL: null
	},
	isRouteLeaveGuardActive: false,
	userManagementDataUpdated: false
}

export default defaultState
