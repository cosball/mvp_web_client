import {
	TransactionDetailsApi
} from '@/modules/TransactionDetails/api'

export default {
	GET_TRANSACTION_DETAILS: ({commit, state, rootState}) => {
		return new Promise((resolve, reject) => {
			TransactionDetailsApi.getSkinDataTransactionByHash(state.transactionHash, rootState.AccountSettings.account.username)
				.then((response) => {
					resolve(response)
				}, () => {
					reject('Failed to retrieve GET_TRANSACTION_DETAILS')
				})
		})
	}
}
