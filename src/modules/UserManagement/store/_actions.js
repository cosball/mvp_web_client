import {
	UserManagementApi
} from '@/modules/UserManagement/api/'

import {
	RequestMappingService
} from '@/modules/UserManagement/services/'

export default {
	GET_USER_MANAGEMENT_LIST: ({commit, state, rootState}, obj) => {
		return new Promise((resolve, reject) => {
			UserManagementApi.getUserManagementList()
				.then((response) => {
					resolve(response)
				}, () => {
					reject('Failed to retrieve user management list')
				})
		})
	},
	ADD_USER_DETAILS: ({commit, state}, userObj) => {
		return new Promise((resolve, reject) => {
			UserManagementApi.addUser(RequestMappingService.mapUserData(userObj))
				.then((response) => {
					commit('SET_USER', userObj)
					resolve(response)
				}, () => {
					reject('Failed to add new user')
				})
		})
	},
	UPDATE_USER_DETAILS: ({commit, state}, {userObj, userId}) => {
		return new Promise((resolve, reject) => {
			UserManagementApi.updateUser(RequestMappingService.mapUserData(userObj), userId)
				.then((response) => {
					commit('SET_USER', userObj)
					resolve(response)
				}, () => {
					reject('Failed to update new user')
				})
		})
	}
}
