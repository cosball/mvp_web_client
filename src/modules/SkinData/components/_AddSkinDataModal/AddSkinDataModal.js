import {
	BaseModal,
	CustomButton
} from '@/modules/Common/components'

import SkinDataUpdateCreateSuccessfulModal from '@/modules/SkinData/components/_SkinDataUpdateCreateSuccessfulModal/SkinDataUpdateCreateSuccessfulModal.vue'

import {
	EventBusService
} from '@/modules/Common/services'

var geolocation = require('geolocation')

export default {
	components: {
		'base-modal': BaseModal,
		CustomButton
	},
	props: {},
	data() {
		return {
			title: 'Add Skin Data',
			inputs: {
				skindata: {
					location: '',
					weather: '',
					temperature: '',
					humidity: '',
					pressure: '',
					moisture: '',
					oil: '',
					pore: '',
					skinTemperature: '',
					skinTone: '',
					wrinkle: ''
				}
			},
			termAndPolicy: 'false'
		}
	},
	computed: {
		isComplete() {
			let isValid = true
			// console.log(this.inputs.skindata)
			Object.keys(this.inputs.skindata).forEach((key, value) => {
				if (!this.inputs.skindata[key]) {
					isValid = false
					return false
				}
			})
			return isValid && this.termAndPolicy === 'true'
		}
	},
	methods: {
		addSkinData() {
			if (!this.isComplete) return
			this.$validator.validateAll().then(result => {
				if (result) {
					this.$store.commit('Common/SHOW_BASE_LOADER', true)
					this.$store.dispatch('SkinData/ADD_SKINDATA', this.inputs.skindata).then(() => {
						this.$store.commit('SkinData/SET_ROUTE_LEAVE_GUARD_ACTIVE', true)
						this.$store.commit('SkinData/SET_SKINDATA_DATA_UPDATED', true)
						this.$store.commit('SkinData/SET_SKINDATA', this.inputs.skindata)
						this.$emit('close')
						this.$customModal.show(
							SkinDataUpdateCreateSuccessfulModal, {
								action: 'add'
							}, {
								width: '50%',
								clickToClose: false
							}, {
								'before-close': () => {
									this.$store.commit('SkinData/SET_SKINDATA', {})
									this.$store.commit('SkinData/SET_ROUTE_LEAVE_GUARD_ACTIVE', false)
									this.$store.commit('SkinData/SET_SKINDATA_DATA_UPDATED', false)
								}
							}
						)
						this.$store.commit('Common/SHOW_BASE_LOADER', false)
					})
				}
			})
		},
		closeModal() {
			this.$store.commit('SkinData/SET_SKINDATA', {})
			this.$emit('close')
		}
	},
	created() {
	},
	mounted() {
		new Promise(function(resolve, reject) {
			geolocation.getCurrentPosition(function(err, position) {
				if (err) throw err
				// console.log(position)
				resolve(position)
			})
		}).then((position) => {
			// console.log(position)
			var geocode = `lon=${position.coords.longitude}&lat=${position.coords.latitude}`
			// var geocode = 'lat=37.4923615&lon=127.02928809999999'
			Promise.all([this.$store.dispatch('Common/GET_WEATHER_DATA', geocode)]).then((results) => {
				// console.log(results[0])
				this.inputs.skindata.location = results[0].name + '/' + results[0].sys.country
				this.inputs.skindata.weather = results[0].weather[0].main
				this.inputs.skindata.temperature = results[0].main.temp
				this.inputs.skindata.humidity = results[0].main.humidity
				this.inputs.skindata.pressure = results[0].main.pressure
				return Promise.resolve()
			}).then(() => {
			})
		})
		EventBusService.$on('CLOSE_CUSTOM_MODAL', this.closeModal)
	},
	beforeDestroy() {
		EventBusService.$off('CLOSE_CUSTOM_MODAL', this.closeModal)
	}
}
