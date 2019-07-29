import {
	BlockChainApiRequest
} from '@/modules/Common/api/providers'

const RewardApi = {
	getNEMTransactions(filter, requester) {
		return new Promise((resolve, reject) => {
			BlockChainApiRequest.get('/transactions', {
				params: {
					filter: filter,
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
	RewardApi
}
