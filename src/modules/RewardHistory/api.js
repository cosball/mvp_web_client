import {
	BlockChainApiRequest
} from '@/modules/Common/api/providers'

const RewardApi = {
	getNEMTransactions(filter, requester) {
		return new Promise((resolve, reject) => {
			BlockChainApiRequest.get('/transactions', {
				params: {
					tx_hash: filter.tx_hash,
					num_of_rows: filter.num_of_rows,
					order: filter.order,
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
