/**
 * Import Global Style (.css/.scss)
 */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/index.scss' // Customize UI

/**
 * Node Modules Dependency
 */
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate'
import head from 'vue-head'
import 'es6-promise/auto'
import {
	sync
} from 'vuex-router-sync'

/**
 * Relative Dependency
 */
import router from './router'
import store from './store'
import filters from './filters'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VModal from 'vue-js-modal'
import { CustomModalPlugin } from '@/modules/Common/plugins'

// use imported vue plugins
Vue.use(VModal, {
	dynamic: true,
	injectModalsContainer: true
})
Vue.use(CustomModalPlugin)
Vue.use(head)
Vue.use(BootstrapVue)
// Vue.use(VeeValidate, {inject: false})
Vue.use(VeeValidate, {
	fieldsBagName: 'veeFields'
})
Vue.use(filters)
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// function loadScriptAsync() {
// 	return new Promise((resolve, reject) => {
// 		let tag = document.createElement('script')
// 		tag.src = 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit'
// 		tag.async = true
// 		tag.defer = true
// 		tag.type = 'text/javascript'
// 		tag.onload = () => {
// 			resolve()
// 		}
// 		document.body.appendChild(tag)
// 	})
// }

function initApp() {
	Vue.config.productionTip = false

	// bind vue router to vuex
	sync(store, router)

	// init vue app
	/* eslint-disable no-new */
	new Vue({
		render: h => h(App),
		router,
		store
	}).$mount('#app')
}

(function() {
	initApp()
//   loadScriptAsync().then(() => initApp())
})()
