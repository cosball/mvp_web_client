import store from '@/store'

const _service = {
	mapAccountSettingsDetails: function mapAccountSettingsDetails(user) {
        if (user.password) {
            return {
                email: user.email,
                username: user.username,
                password: user.password,
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
        } else {
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
}

export default _service
