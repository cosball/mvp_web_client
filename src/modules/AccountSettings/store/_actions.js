import {
	AccountSettingsApi
} from '@/modules/AccountSettings/api/'

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
	UPDATE_USER_DETAILS: ({commit, state, rootState}, profileURL) => {
		return new Promise((resolve, reject) => {
			AccountSettingsApi.updateUserDetails(rootState.Common.userId, profileURL)
				.then((response) => {
					commit('SET_ACCOUNT_PROFILE_IMAGE', profileURL)
					resolve(profileURL)
				}, () => {
					reject('Failed UPDATE_USER_DETAILS')
				})
		})
	}
}
