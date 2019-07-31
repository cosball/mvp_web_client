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
	updateProfileURL(userId, profileURL) {
		return new Promise((resolve, reject) => {
			WebAdminRestRequest.patch(`/users/${userId}`, {
				profileURL
			}).then((res) => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	updateUser(userObj, userId) {
		return new Promise((resolve, reject) => {
			WebAdminRestRequest.patch(`users/${userId}`, userObj).then((res) => {
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
