import {
	BlockChainApiRequest
} from '@/modules/Common/api/providers'

const TransactionDetailsApi = {
	getSkinDataTransactionByHash(hash, requester) {
		return new Promise((resolve, reject) => {
			BlockChainApiRequest.get(`/skin_data/get/${hash}`, {
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
	TransactionDetailsApi
}
