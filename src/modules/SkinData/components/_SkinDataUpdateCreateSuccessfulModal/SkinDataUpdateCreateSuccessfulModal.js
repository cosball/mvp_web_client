import {
	BaseModal,
	CustomButton
} from '@/modules/Common/components'

import {
	EventBusService
} from '@/modules/Common/services'

export default {
	components: {
		'base-modal': BaseModal,
		CustomButton
	},
	props: {
		action: {
			type: String,
			default: 'add'
		}
	},
	computed: {

	},
	data() {
		return {
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
	methods: {
		closeModal() {
			this.$emit('close')
		}
	},
	created() {

	},
	mounted() {
		this.cosballProducts = []
		for (let cosball of this.skindata.recommenedCosball.split(',')) {
			var html = '<span class="cosball" style="background:' + this.cosballColor[cosball[0]] + ';">' + cosball + '</span>'
			this.cosballProducts.push(html)
		}
		EventBusService.$on('CLOSE_CUSTOM_MODAL', this.closeModal)
	},
	beforeDestroy() {
		EventBusService.$off('CLOSE_CUSTOM_MODAL', this.closeModal)
	}
}
