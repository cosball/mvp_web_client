import {
	WebAdminRestRequest
} from '@/modules/Common/api/providers'

const AccountSettingsApi = {
	getUserDetails(userId) {
		return new Promise((resolve, reject) => {
			WebAdminRestRequest.get(`/users/${userId}`).then((res) => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	updateUserDetails(userId, profileURL) {
		return new Promise((resolve, reject) => {
			WebAdminRestRequest.patch(`/users/${userId}`, {
				profileURL
			}).then((res) => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	}
}

export {
	AccountSettingsApi
}
