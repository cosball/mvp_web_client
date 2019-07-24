import {
	debounce
} from 'lodash'

export default {
	name: 'goto-top',
	components: {},
	data() {
		return {
			handleDebouncedScroll: null,
			hideArrow: true
		}
	},
	props: {
		// passing in data for default view
		goToTopId: String
	},
	methods: {
		goToTop() {
			document.getElementById(`${this.goToTopId}`).scrollIntoView({
				behavior: 'smooth',
				block: 'end',
				inline: 'nearest'
			})
		},
		handleScroll(e) {
			this.hideArrow = (e.target.scrollTop < 400)
		}
	},
	mounted() {
		setTimeout(() => {
			this.handleDebouncedScroll = debounce(this.handleScroll, 100)
			document.getElementsByClassName('body')[0].addEventListener('scroll', this.handleDebouncedScroll)
		}, 400)
	},
	destroyed() {
		document.getElementsByClassName('body')[0].removeEventListener('scroll', this.handleDebouncedScroll)
	}
}
