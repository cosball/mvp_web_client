import {
	AuthRequest,
	WebAdminRestRequest,
	UserRestRequest,
	BlockChainApiRequest,
	OpenWeatherMapRequest
} from '@/modules/Common/api/providers'

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
	getNEMStatistics() {
		return new Promise((resolve, reject) => {
			BlockChainApiRequest.get('/statistics/count/240/grouping/60', {
				params: {
				}
			}).then((res) => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	getSkinDataDashboard() {
		return new Promise((resolve, reject) => {
			WebAdminRestRequest.get('skin_data/dashboard', {
				params: {
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
