import {
	CommonApi
} from '@/modules/Common/api/apiRequest'

import {
	RouteService
} from '@/modules/Common/services/'

export default {
	SHOW_BASE_LOADER: ({commit, state}, show) => {
		return new Promise((resolve, reject) => {
			commit('SHOW_BASE_LOADER', show)
			// workaround for vue render delay issue
			setTimeout(() => {
				resolve()
			}, 100)
		})
	},
	SWITCH_ROUTE_TRANSITION: ({commit, state}, routeTransition) => {
		commit('SET_ROUTE_TRANSITION', routeTransition)
	},
	AUTHENTICATE_USER: ({commit, state}, obj) => {
		return new Promise((resolve, reject) => {
			CommonApi.authenticateUser(obj)
				.then((response) => {
					commit('SET_ACCESS_TOKEN', response.id)
					commit('SET_IS_AUTHENTICATED', true)
					commit('SET_USER_ID', response.userId)
					resolve()
				}, () => {
					reject('Failed authenticate user')
				})
		})
    },
	GET_ROLE_LIST: ({commit, state, rootState}, userId) => {
		return new Promise((resolve, reject) => {
			let roleList = []
			if (rootState.AccountSettings.account.roleType === 'Super') {
				roleList = state.roles
			} else {
				roleList = [{
					text: 'User',
					value: 'User'
				}]
			}
			commit('SET_ROLE_LIST', roleList)
			resolve()
		})
	},
	LOGOUT: ({ dispatch, commit, state, rootState }) => {
		return new Promise((resolve, reject) => {
			CommonApi.logout()
				.then((response) => {
					resolve()
				}, () => {
					reject('Failed logout user')
				}).finally(() => {
					RouteService.push({
						name: 'landing'
					})
					dispatch('RESET_ALL_STATE', {}, {
						root: true
					})
				})
		})
	},
	GET_NEM_STATS: ({commit, state, rootState}) => {
		return new Promise((resolve, reject) => {
			CommonApi.getNEMStatistics()
				.then((res) => {
					resolve(res)
				}, () => {
					reject('Failed to get NEM statistics')
				})
		})
	},
    GET_SKINDATA_DASHBOARD: ({commit, state, rootState}) => {
		return new Promise((resolve, reject) => {
			CommonApi.getSkinDataDashboard()
				.then((res) => {
					resolve(res)
				}, () => {
					reject('Failed to get skindata dashboard')
				})
		})
	},
    GET_COUNTRY_LIST: ({commit, state, rootState}) => {
		return new Promise((resolve, reject) => {
			CommonApi.getCountryList()
				.then((res) => {
					resolve(res)
				}, () => {
					reject('Failed to get country list')
				})
		})
	},
    GET_RACE_DATA: ({commit, state, rootState}) => {
		return new Promise((resolve, reject) => {
			CommonApi.getRaceData()
				.then((res) => {
					resolve(res)
				}, () => {
					reject('Failed to get race data')
				})
		})
	},
    GET_WEATHER_DATA: ({commit, state}, loc) => {
		return new Promise((resolve, reject) => {
			// console.log(loc)
			CommonApi.getWeatherData(loc)
				.then((res) => {
					resolve(res)
				}, () => {
					reject('Failed to get weather data')
				})
		})
	},
}
