import store from '@/store'

const _service = {
	loadInitialData: function loadInitialData() {
		const promises = [
			store.dispatch('Common/GET_INSTITUTIONS_LIST'),
			store.dispatch('Common/GET_ROLE_LIST'),
			store.dispatch('Common/GET_CONFIG_LIMIT'),
			store.dispatch('Common/GET_CRYPTO_CURRENCY_LIST')
		]

		return Promise.all(promises)
	},
}

export default _service
