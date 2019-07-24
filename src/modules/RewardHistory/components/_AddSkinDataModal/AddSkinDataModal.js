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
			title: 'Add Skin Data',
			inputs: {
				skindata: {
					address: this.$store.state.SkinData.skindata.address,
					addressType: this.$store.state.SkinData.skindata.addressType ? this.$store.state.SkinData.skindata.addressType.toUpperCase() : null,
					reason: this.$store.state.SkinData.skindata.reason,
					remark: this.$store.state.SkinData.skindata.remark,
					status: this.$store.state.SkinData.skindata.status
				}
			},
			termAndPolicy: 'false',
			blockchainTypeList: [{
					text: 'BTC',
					value: 'BTC'
				},
				{
					text: 'ETH',
					value: 'ETH'
				},
				{
					text: 'XRP',
					value: 'XRP'
				},
				{
					text: 'BCH',
					value: 'BCH'
				},
				{
					text: 'LTC',
					value: 'LTC'
				}
			],
			statusList: [
				{ text: 'Allow', value: 0 },
				{ text: 'Block', value: 1 }
			]
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
	mounted() {
		EventBusService.$on('CLOSE_CUSTOM_MODAL', this.closeModal)
	},
	beforeDestroy() {
		EventBusService.$off('CLOSE_CUSTOM_MODAL', this.closeModal)
	}
}
