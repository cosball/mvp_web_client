import {
	WebAdminRestRequest,
	BlockChainApiRequest
} from '@/modules/Common/api/providers'

const SkinDataApi = {
	getSkinDataList(filter) {
		return new Promise((resolve, reject) => {
			WebAdminRestRequest.get('/skin_data', {
				params: {
					filter: filter
				}
			}).then((res) => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	addSkinData(skindataObj, requester) {
		return new Promise((resolve, reject) => {
			BlockChainApiRequest.post(`/skin_data/add`, {
				skindata: skindataObj
			}, {
				params: {
					requester
				}
			}).then((res) => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	updateSkinDataData(blockChainAddress, skindataObj, requester) {
		return new Promise((resolve, reject) => {
			BlockChainApiRequest.post(`/skin_data/update/${blockChainAddress}`, {
				skindata: skindataObj
			}, {
				params: {
					requester
				}
			}).then((res) => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	}
}

export {
	SkinDataApi
}
