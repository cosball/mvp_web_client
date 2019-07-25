import store from '@/store'

const _service = {
	loadInitialData: function loadInitialData() {
		const promises = [
			store.dispatch('Common/GET_ROLE_LIST')
		]

		return Promise.all(promises)
	},
}

export default _service
