
import store from '@/store'

const _service = {
	mapUserData: function mapUserData(user) {
		return {
			firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            institutionShortName: user.institutionShortName,
            posTitle: user.posTitle,
			roleType: user.roleType,
            createdAt: new Date(),
            creator: store.state.AccountSettings.account.username,
            institutionId: user.institutionId,
            email: user.email,
            contactNo: user.contactNo
		}
	}
}

export default _service
