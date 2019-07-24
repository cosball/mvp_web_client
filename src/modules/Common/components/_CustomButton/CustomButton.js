export default {
	name: 'custom-button',
	data() {
		return {}
	},
	props: {
		inverseColor: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		hasContentLeft() {
			return Boolean(this.$slots.contentLeft)
		},
		hasContentRight() {
			return Boolean(this.$slots.contentRight)
		}
	},
	methods: {
		onClick(e) {
			this.$emit('click', e)
		}
	}
}
