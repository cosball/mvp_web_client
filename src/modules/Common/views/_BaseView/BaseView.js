import {
	EventBusService,
	RouteService
} from '@/modules/Common/services'

import {
	MenuPane,
	PageHeader
} from '@/modules/Common/components'

let requestErrorCallback
let serverErrorCallback
let networkErrorCallback

export default {
	name: 'app',
	components: {
		MenuPane,
		PageHeader
	},
	data() {
		return {
			isLoaderIconActive: false,
			isLoaderIconSemiActive: false,
			error: {
				title: '',
				message: ''
			}
		}
	},
	computed: {
		leftPaneMenu() {
			return this.$store.state.Common.leftPaneMenu.filter((value) => value.accessible.includes(this.$store.state.AccountSettings.account.roleType))
		}
	},
	methods: {
		hideLeftPane() {
			this.$store.commit('Common/SHOW_MENU_PANE', false)
		},
		animateLoaderIcon() {
			if (this.$store.state.Common.isBaseLoaderActive) {
				setTimeout(() => {
					this.isLoaderIconActive = !this.isLoaderIconActive
					this.animateLoaderIcon()
				}, 600)
			}
		},
		redirectToLoginPage() {
			this.$store.commit('Common/SET_ACCESS_TOKEN', '')
			this.$store.commit('Common/SET_IS_AUTHENTICATED', false)
			RouteService.push({
				name: 'landing'
			})
		}
	},
	mounted() {
		requestErrorCallback = (err) => {
			this.$store.commit('Common/SHOW_BASE_LOADER', false)
			this.$set(this.error, 'title', `Error`)
			let errorMessage = `Unknown Request Error`
			if (err.response && err.response.data) {
				// oauth api error format
				if (err.response.data.error) {
					const errorCode = err.response.data.error.code
					if (errorCode === 'LOGIN_FAILED') {
						errorMessage = `Invalid Credentials`
					} else if (errorCode === 'AUTHORIZATION_REQUIRED' || errorCode === 'INVALID_TOKEN') {
						errorMessage = `Your Access Token Expired. Please Re-login Again`
						this.redirectToLoginPage()
					} else if (errorCode === 'unsupported_grant_type') {
						errorMessage = `Refresh Session Fail`
					} else {
						errorMessage = err.response.data.error.message
					}
				}
			}
			this.$set(this.error, 'message', errorMessage)
			this.$bvToast.show('error-toast')
		}
		serverErrorCallback = () => {
			this.$store.commit('Common/SHOW_BASE_LOADER', false)
			this.$set(this.error, 'title', `Error`)
			this.$set(this.error, 'message', `Server Error`)
			this.$bvToast.show('error-toast')
		}
		networkErrorCallback = () => {
			this.$store.commit('Common/SHOW_BASE_LOADER', false)
			this.$set(this.error, 'title', `Error`)
			this.$set(this.error, 'message', `Network Error`)
			this.$bvToast.show('error-toast')
		}

		EventBusService.$on('REQUEST_ERROR', requestErrorCallback)
		EventBusService.$on('SERVER_ERROR', serverErrorCallback)
		EventBusService.$on('NETWORK_ERROR', networkErrorCallback)
	},
	destroyed() {
		EventBusService.$off('REQUEST_ERROR', requestErrorCallback)
		EventBusService.$off('SERVER_ERROR', serverErrorCallback)
		EventBusService.$off('NETWORK_ERROR', networkErrorCallback)
	},
	watch: {
		'$store.state.Common.isBaseLoaderActive': function(isActive) {
			if (isActive) {
				this.isLoaderIconActive = false
				this.isLoaderIconSemiActive = false
				setTimeout(() => {
					this.isLoaderIconActive = true
					this.isLoaderIconSemiActive = true
					this.animateLoaderIcon()
				}, 100)
			}
		}
	}
}
