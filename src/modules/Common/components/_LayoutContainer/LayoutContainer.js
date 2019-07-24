export default {
	name: 'layout-container',
	data() {
		return {
			style: '',
			showFooter: true
		}
	},
	props: {
		hasBackground: {
			type: Boolean,
			default: false
		},
		isNested: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		hasHeader() {
			let headerExist = Boolean(this.$slots.header)
			return headerExist
		},
		hasFooter() {
			return Boolean(this.$slots.footer)
		}
	},
	methods: {
		showContainerFooter() {
			this.showFooter = true
		},
		hideContainerFooter() {
			this.showFooter = false
		}
	}
}
