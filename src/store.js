import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import Common from './modules/Common/store'
import Landing from './modules/Landing/store'
import SkinData from './modules/SkinData/store'
import RewardHistory from './modules/RewardHistory/store'
import UserManagement from './modules/UserManagement/store'
import AccountSettings from './modules/AccountSettings/store'
import TransactionDetails from './modules/TransactionDetails/store'

import commonDefaultState from './modules/Common/store/_state.js'
import landingDefaultState from './modules/Landing/store/_state.js'
import skindataDefaultState from './modules/SkinData/store/_state.js'
import rewardHistoryDefaultState from './modules/RewardHistory/store/_state.js'
import userManagementDefaultState from './modules/UserManagement/store/_state.js'
import accountSettingsDefaultState from './modules/AccountSettings/store/_state.js'
import transactionDetailsDefaultState from './modules/TransactionDetails/store/_state.js'

import { cloneDeep } from 'lodash'

Vue.use(Vuex)

const modules = {
	Common,
	Landing,
	SkinData,
	RewardHistory,
	UserManagement,
	AccountSettings,
	TransactionDetails
}

const stateRef = {
    Common: commonDefaultState,
    Landing: landingDefaultState,
	SkinData: skindataDefaultState,
	RewardHistory: rewardHistoryDefaultState,
    UserManagement: userManagementDefaultState,
    AccountSettings: accountSettingsDefaultState,
    TransactionDetails: transactionDetailsDefaultState
}

const keys = Object.keys(modules)

keys.forEach(function(key) {
	modules[key].mutations['RESET_STATE'] = function resetState(state) {
		Object.assign(state, cloneDeep(stateRef[key]))
	}
	modules[key].actions['RESET_STATE'] = function resetState(context) {
		context.commit('RESET_STATE')
	}
})

function defaultRootState() {
	return {
		moduleCd: ''
	}
}

const mutations = {
	SET_MODULE_CODE(state, code) {
		state.moduleCd = code
	},
	RESET_STATE(state) {
		const s = defaultRootState()
		Object.keys(s).forEach(key => {
			state[key] = s[key]
		})

		keys.forEach((moduleKey) => {
			state[moduleKey] = Object.assign({}, cloneDeep(stateRef[moduleKey]))
		})
	}
}

const actions = {
	RESET_ALL_STATE({commit}) {
		console.log('RESET_ALL_STATE')
		commit('RESET_STATE')
	}
}

const getters = {
	getModuleCd: state => state.moduleCd
}
const store = new Vuex.Store({
    modules,
    mutations,
    getters,
    actions,
	plugins: [createPersistedState()],
	strict: true
})

export default store
