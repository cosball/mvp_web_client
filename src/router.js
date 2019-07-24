import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'

import store from './store'

import LandingRoutes from './modules/Landing/routes'
import SkinDataRoutes from './modules/SkinData/routes'
import RewardHistoryRoutes from './modules/RewardHistory/routes'
import UserManagementRoutes from './modules/UserManagement/routes'
import AccountSettingsRoutes from './modules/AccountSettings/routes'
import TransactionDetailsRoutes from './modules/TransactionDetails/routes'

Vue.use(VueRouter)

const routes = []
	.concat(LandingRoutes)
	.concat(SkinDataRoutes)
	.concat(RewardHistoryRoutes)
	.concat(UserManagementRoutes)
	.concat(AccountSettingsRoutes)
	.concat(TransactionDetailsRoutes)

const router = new VueRouter({
	mode: 'hash',
	routes,
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}
})

Vue.use(VueAnalytics, {
	id: 'UA-143767054-2',
	router,
	autoTracking: {
		pageviewOnLoad: false
	}
})

router.beforeEach((to, from, next) => {
	store.commit('Common/SHOW_MENU_PANE', to.meta.showHeader ? to.meta.showHeader : false)
	store.commit('Common/SHOW_HEADER_PANE', to.meta.showMenuPane ? to.meta.showMenuPane : false)
	if (to.meta.isSecured !== false) {
		// this route requires auth, check if it has the access
		// if not, redirect to login page.
		if (store.state.Common.isAuthenticated) {
			next()
		} else {
			store.dispatch('RESET_ALL_STATE', {}, {
				root: true
			})
			next('/landing')
		}
	} else if (to.name === 'landing') { // if the link entered is not a registered route, route back the link to login page's link
		if (store.state.Common.isAuthenticated) {
			store.dispatch('Common/LOGOUT')
		} else {
			store.dispatch('RESET_ALL_STATE', {}, {
				root: true
			})
			next()
		}
	} else {
		next()
	}
})

router.afterEach((to, from) => {
	console.log('route from', from)
	console.log('route to', to)
	store.commit('Common/SET_PREV_ROUTE_NAME', from.name)
})

export default router
