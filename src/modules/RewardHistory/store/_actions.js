import {
	SkinDataApi
} from '@/modules/SkinData/api/'

import {
    RequestMappingService
} from '@/modules/SkinData/services'

export default {
	GET_SKINDATA_LIST: ({commit, state}, obj) => {
		return new Promise((resolve, reject) => {
			SkinDataApi.getSkinDataList(obj)
				.then((response) => {
					resolve(response)
				}, () => {
					reject('Failed to retrieve skindata list')
				})
		})
	},
	ADD_SKINDATA: ({commit, state, rootState}, skindataObj) => {
		return new Promise((resolve, reject) => {
			SkinDataApi.addSkinDataData(skindataObj.address, RequestMappingService.mapSkinData(skindataObj), rootState.AccountSettings.account.username)
				.then((response) => {
					commit('AccountSettings/SET_ACCOUNT_ADD_SKINDATA_COUNT', response.addSkinDataCount, {root: true})
					resolve(response)
				}, () => {
					reject('Failed to add skindata')
				})
		})
	},
	UPDATE_SKINDATA: ({commit, state, rootState}, skindataObj) => {
		return new Promise((resolve, reject) => {
			SkinDataApi.updateSkinDataData(skindataObj.address, RequestMappingService.mapSkinData(skindataObj), rootState.AccountSettings.account.username)
				.then((response) => {
					resolve(response)
				}, () => {
					reject('Failed to update skindata')
				})
		})
	}
}
