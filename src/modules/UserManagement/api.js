import {
	WebAdminRestRequest
} from '@/modules/Common/api/providers'

import store from '@/store'
const UserManagementApi = {
	getUserManagementList() {
		var filterWhere = {}
		if (store.state.AccountSettings.account.roleType === 'Super') {
			filterWhere = { or: [{ roleType: 'Admin' }, { roleType: 'User' }] }
		} else if (store.state.AccountSettings.account.roleType === 'Admin') {
			filterWhere = { roleType: 'User' }
		} else {
			filterWhere = { roleType: '***' }
		}
		return new Promise((resolve, reject) => {
			WebAdminRestRequest.get('users', {
				params: {
					filter: { where: filterWhere }
				}
			}).then((res) => {
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
