import {
	RewardApi
} from '@/modules/RewardHistory/api/'

export default {
	GET_TRANS_LIST: ({commit, state, rootState}, obj) => {
		return new Promise((resolve, reject) => {
			RewardApi.getNEMTransactions(obj, rootState.AccountSettings.account.username)
				.then((response) => {
					resolve(response)
				}, () => {
					reject('Failed to retrieve NEM Transactions')
				})
		})
	}
}
