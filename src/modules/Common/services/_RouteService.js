import store from '@/store'
import router from '@/router'

import {
	TRANSITION
} from '@/modules/Common/constants'

import {
	forEach,
	findIndex,
	slice
} from 'lodash'

const _service = {
	push(option, routeTransition = TRANSITION.FADE) {
		// store.commit('Common/SHOW_MENU_PANE', false)
		return store.dispatch(`Common/SWITCH_ROUTE_TRANSITION`, routeTransition)
			.then(() => {
				router.push(option)
			})
	},
	getLandingRouteByAppState() {
		return new Promise((resolve, reject) => {
			let routeConditions = _service.getLandingRouteConditions()
			let index = findIndex(routeConditions, (condition) => {
				return condition.name === router.currentRoute.name
			})
			routeConditions = slice(routeConditions, index + 1)
			forEach(routeConditions, (condition) => {
				condition.handler().then((route) => {
					if (route) {
						resolve(route)
						return Promise.reject('route found, break promise')
					} else {
						return true
					}
				})
			})
		})
	},
	getLandingRouteConditions: function getLandingRouteConditions() {
		return [{
			name: 'firstTimeLogin',
			handler: function() {
				if (store.state.AccountSettings.account.firstSignIn && !store.state.AccountSettings.account.tempPassExpired) {
					return Promise.resolve('firstTimeLogin')
				}
				return Promise.resolve('')
			}
		}, {
			name: 'tempPassswordExpired',
			handler: function() {
				if (store.state.AccountSettings.account.firstSignIn && store.state.AccountSettings.account.tempPassExpired) {
					return Promise.resolve('tempPassswordExpired')
				}
				return Promise.resolve('')
			}
		}, {
			name: 'SkinData',
			handler: function() {
				if (!store.state.AccountSettings.account.firstSignIn) {
					return Promise.resolve('SkinData')
				}
				return Promise.resolve('')
			}
		}]
	}
}

export default _service
