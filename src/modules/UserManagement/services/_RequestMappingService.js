
import store from '@/store'

const _service = {
	mapUserData: function mapUserData(user) {
		return {
			email: user.email,
            username: user.username,
            country: user.country,
            raceId: user.raceId,
            dob: user.dob,
            gender: user.gender,
            toImprove: user.toImprove,
            ongoingProblems: user.ongoingProblems,
			roleType: user.roleType,
            createdAt: new Date(),
            creator: store.state.AccountSettings.account.username,
		}
	}
}

export default _service
