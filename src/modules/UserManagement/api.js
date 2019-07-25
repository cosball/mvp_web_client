import {
	WebAdminRestRequest
} from '@/modules/Common/api/providers'

import store from '@/store'
const UserManagementApi = {
	getUserManagementList() {
		let url = store.state.AccountSettings.account.roleType === 'Super' ? 'users' : `institutions/institutionId/users`
		return new Promise((resolve, reject) => {
			WebAdminRestRequest.get(url).then((res) => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	addUser(userObj) {
		return new Promise((resolve, reject) => {
			WebAdminRestRequest.post('users', userObj).then((res) => {
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
	UserManagementApi
}
