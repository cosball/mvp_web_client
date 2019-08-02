import {
	AccountSettingsApi
} from '@/modules/AccountSettings/api/'

import {
	RequestMappingService
} from '@/modules/AccountSettings/services/'

export default {
    GET_USER_DETAILS: ({commit, state, rootState}) => {
		return new Promise((resolve, reject) => {
			AccountSettingsApi.getUserDetails(rootState.Common.userId)
				.then((response) => {
					commit('SET_ACCOUNT_PROFILE_SETTING', response)
					resolve()
				}, () => {
					reject('Failed authenticate user')
				})
		})
	},
    GET_USER_BALANCE: ({commit, state}, username) => {
		return new Promise((resolve, reject) => {
			AccountSettingsApi.getUserBalance(username)
				.then((response) => {
					resolve(response)
				}, () => {
					reject('Failed GET_USER_BALANCE')
				})
		})
	},
	UPDATE_PROFILE_URL: ({commit, state, rootState}, profileURL) => {
		return new Promise((resolve, reject) => {
			AccountSettingsApi.updateProfileURL(rootState.Common.userId, profileURL)
				.then((response) => {
					commit('SET_ACCOUNT_PROFILE_IMAGE', profileURL)
					resolve(profileURL)
				}, () => {
					reject('Failed UPDATE_USER_DETAILS')
				})
		})
	},
	UPDATE_USER_DETAILS: ({commit, state}, {userObj, userId}) => {
		return new Promise((resolve, reject) => {
			AccountSettingsApi.updateUser(RequestMappingService.mapAccountSettingsDetails(userObj), userId)
				.then((response) => {
					commit('SET_ACCOUNT_PROFILE_SETTING', userObj)
					resolve(response)
				}, () => {
					reject('Failed to update account')
				})
		})
	}
}
