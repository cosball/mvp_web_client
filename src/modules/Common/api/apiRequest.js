import {
	AuthRequest,
	WebAdminRestRequest,
	UserRestRequest,
	BlockChainApiRequest,
	OpenWeatherMapRequest
} from '@/modules/Common/api/providers'

import store from '@/store'

const CommonApi = {
	authenticateUser(credentials) {
		return new Promise((resolve, reject) => {
			AuthRequest.post('/users/login', credentials).then((res) => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	getInstitutionsList() {
		let url = store.state.AccountSettings.account.roleType === 'Super' ? 'institutions' : `institutions/${store.state.AccountSettings.account.institutionId}`
		return new Promise((resolve, reject) => {
			WebAdminRestRequest.get(url)
				.then(response => {
					Array.isArray(response) ? resolve(response) : resolve([response])
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getCryptoCurrencyList() {
		return new Promise((resolve, reject) => {
			resolve([{
					text: 'BTC',
					value: 'BTC'
				},
				{
					text: 'ETH',
					value: 'ETH'
				},
				{
					text: 'XRP',
					value: 'XRP'
				},
				{
					text: 'BCH',
					value: 'BCH'
				},
				{
					text: 'LTC',
					value: 'LTC'
				}
			])
		})
	},
	getUploadConfigLimit(username) {
		return new Promise((resolve, reject) => {
			WebAdminRestRequest.get('/config_limits', {
					params: {
						filter: {
							'where': {
								'or': [{
									'username': {
										'like': username
									}
								}, {
									'username': {
										'like': 'DefaultUser'
									}
								}]
							}
						}
					}
				})
				.then(response => {
					resolve(response)
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	logout() {
		return new Promise((resolve, reject) => {
			UserRestRequest.post('users/logout')
				.then(response => {
					resolve()
				})
				.catch(err => {
					reject(err)
				})
		})
	},
	getNEMStatistics(institutionId) {
		return new Promise((resolve, reject) => {
			BlockChainApiRequest.get('/statistics/count/240/grouping/60', {
				params: {
					institutionId
				}
			}).then((res) => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	getSkinDataDashboard(institutionId) {
		return new Promise((resolve, reject) => {
			WebAdminRestRequest.get('skin_data/dashboard', {
				params: {
					institutionId
				}
			}).then((res) => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	getCountryList() {
		return new Promise((resolve, reject) => {
			WebAdminRestRequest.get('countries/list'
			).then((res) => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	getRaceData() {
		return new Promise((resolve, reject) => {
			WebAdminRestRequest.get('races/list'
			).then((res) => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	getWeatherData(loc) {
		return new Promise((resolve, reject) => {
			OpenWeatherMapRequest.get(`weather?${loc}&appid=65ce5151ad23933f30267dfe0bc67807&units=metric`
			).then((res) => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	}
}

export {
	CommonApi
}
