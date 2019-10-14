import {
	BaseModal,
	CustomButton
} from '@/modules/Common/components'

import SkinDataUpdateCreateSuccessfulModal from '@/modules/SkinData/components/_SkinDataUpdateCreateSuccessfulModal/SkinDataUpdateCreateSuccessfulModal.vue'

import {
	EventBusService
} from '@/modules/Common/services'

export default {
	components: {
		'base-modal': BaseModal,
		CustomButton
	},
	props: {},
	data() {
		return {
			title: 'View Skin Data',
			inputs: {
				skindata: {
					location: this.$store.state.SkinData.skindata.location,
					weather: this.$store.state.SkinData.skindata.weather,
					temperature: this.$store.state.SkinData.skindata.temperature,
					humidity: this.$store.state.SkinData.skindata.humidity,
					pressure: this.$store.state.SkinData.skindata.pressure,
					moisture: this.$store.state.SkinData.skindata.moisture,
					oil: this.$store.state.SkinData.skindata.oil,
					pore: this.$store.state.SkinData.skindata.pore,
					skinTemperature: this.$store.state.SkinData.skindata.skinTemperature,
					skinTone: this.$store.state.SkinData.skindata.skinTone,
					wrinkle: this.$store.state.SkinData.skindata.wrinkle,
					rewardPoint: this.$store.state.SkinData.skindata.rewardPoint,
					recommenedCosball: this.$store.state.SkinData.skindata.recommenedCosball,
					transactionHash: this.$store.state.SkinData.skindata.transactionHash,
					createdAt: this.$store.state.SkinData.skindata.createdAt
				}
			},
			cosballColor: {
				A: 'rgb(23, 115, 181)',
				B: 'rgb(213, 38, 40)',
				C: 'rgb(99, 158, 70)',
				D: 'rgb(93, 56, 134)',
				E: 'rgb(217, 158, 56)',
				F: 'rgb(146, 31, 116)',
			},
			cosballProducts: []
		}
	},
	computed: {
		isComplete() {
			let isValid = true
			Object.keys(this.inputs.skindata).forEach((key, value) => {
				if (key !== 'status' && !this.inputs.skindata[key]) {
					isValid = false
					return false
				}
			})
			return isValid && this.termAndPolicy === 'true'
		}
	},
	methods: {
		viewSkinData() {
			if (!this.isComplete) return
			this.$validator.validateAll().then(result => {
				if (result) {
					this.$store.commit('Common/SHOW_BASE_LOADER', true)
					this.$store.dispatch('SkinData/UPDATE_SKINDATA', this.inputs.skindata).then(() => {
						this.$store.commit('SkinData/SET_ROUTE_LEAVE_GUARD_ACTIVE', true)
						this.$store.commit('SkinData/SET_SKINDATA_DATA_UPDATED', true)
						this.$store.commit('SkinData/SET_SKINDATA', this.inputs.skindata)
						this.$emit('close')
						this.$customModal.show(
							SkinDataUpdateCreateSuccessfulModal, {
								action: 'edit'
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
	mounted() {
		this.cosballProducts = []
		for (let cosball of this.inputs.skindata.recommenedCosball.split(',')) {
			var html = '<span class="cosball" style="background:' + this.cosballColor[cosball[0]] + ';">' + cosball + '</span>'
			this.cosballProducts.push(html)
		}
		EventBusService.$on('CLOSE_CUSTOM_MODAL', this.closeModal)
	},
	beforeDestroy() {
		EventBusService.$off('CLOSE_CUSTOM_MODAL', this.closeModal)
	}
}
