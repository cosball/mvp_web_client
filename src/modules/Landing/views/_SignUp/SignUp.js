import {
	LayoutContainer,
	CustomButton,
	InputBox
} from '@/modules/Common/components'

import {
	RouteService,
	EventBusService
} from '@/modules/Common/services'

import VueRecaptcha from 'vue-recaptcha'

import {
	LandingHeader,
	LandingFooter,
	SignUpSuccessModal
} from '@/modules/Landing/components'

import Datepicker from 'vuejs-datepicker'
import moment from 'moment'

export default {
	name: 'signup',
	components: {
		LayoutContainer,
		CustomButton,
		InputBox,
		LandingHeader,
		LandingFooter,
		SignUpSuccessModal,
		VueRecaptcha,
		Datepicker
	},
	props: {},
	computed: {
		isComplete() {
			let isValid = true
			console.log(this.inputs.signup)
			Object.keys(this.inputs.signup).forEach((key) => {
				// console.log('KEY:' + key + ', : ' + this.inputs.signup[key])
				if (['email', 'country', 'race', 'dob', 'gender'].indexOf(key) !== -1 && !this.inputs.signup[key]) {
					isValid = false
					return false
				}
			})
			return isValid && this.termAndPolicy === 'true' && Boolean(this.recaptchaToken)
		}
	},
	data() {
		return {
			inputs: {
				signup: {
					email: '',
					country: '',
					race: '',
					dob: '',
					gender: '',
					freckles: false,
					wrinkles: false,
					pore: false,
					oilySkin: false,
					drySkin: false,
					pimples: false,
					skinTrouble: false,
					corneum: false,
					itching: false,
					creator: 'webadmin2', // Username of WebAdmin2
					userId: '5d072f3e70fd102cb69eb4d5', // UserID of Webadmin2
					institutionId: '5cff9df764c1a615a60b59fd', // Institution ID of WebAdmin2
				}
			},
			termAndPolicy: 'false',
			recaptchaToken: '',
			recaptcha_sitekey: process.env.VUE_APP_SITEKEY,
			countryList: {},
			raceData: {}
		}
	},
	methods: {
		customFormatter(date) {
			return moment(date).format('YYYY-MM-DD')
		},
		goToLanding() {
			RouteService.push({
				name: 'landing'
			})
		},
		onVerify(recaptchaToken) {
			this.recaptchaToken = recaptchaToken
		},
		signup() {
			if (!this.isComplete) return
			this.$validator.validateAll().then(result => {
				if (result) {
					this.submit()
				}
			})
		},
		submit() {
			this.$store.commit('Common/SHOW_BASE_LOADER', true)
			this.$store.dispatch('Landing/SIGN_UP', this.inputs.signup).then(() => {
				this.$store.commit('Landing/SET_ROUTE_LEAVE_GUARD_ACTIVE', true)
				this.$customModal.show(
					SignUpSuccessModal, {}, {
						width: '50%',
						clickToClose: false
					}, {
						'before-close': () => {
							this.$store.commit('Landing/SET_ROUTE_LEAVE_GUARD_ACTIVE', false)
						}
					}
				)
				Object.keys(this.inputs.signup).forEach((key) => {
					if (key !== 'creator' && key !== 'userId' && key !== 'institutionId') {
						this.inputs.signup[key] = ''
					}
				})
				this.termAndPolicy = 'false'
				this.$refs.recaptcha.reset()
				this.$validator.reset()
				this.$store.commit('Common/SHOW_BASE_LOADER', false)
			})
		}
	},
	created() {
		Promise.all([this.$store.dispatch('Common/GET_COUNTRY_LIST'), this.$store.dispatch('Common/GET_RACE_DATA')]).then((results) => {
			this.countryList = results[0].data
			this.raceData = results[1].data
			return Promise.resolve()
		}).then(() => {
		})
	},
	mounted() {
	},
	beforeRouteLeave(to, from, next) {
		if (this.$store.state.UserManagement.isRouteLeaveGuardActive) {
			let confirmLeaving = confirm('Current changes will be lost. Proceed anyway?')
			if (confirmLeaving) {
				EventBusService.$emit('CLOSE_CUSTOM_MODAL')
				next()
			} else {
				next(false)
			}
		} else {
			next()
		}
	}
}
