import {
	LayoutContainer,
	CustomButton,
	LineChartNemStats,
	BarChartSkinDataPerDay
} from '@/modules/Common/components'

import {
	LandingHeader,
	LandingFooter
} from '@/modules/Landing/components'

import {
	Hooper,
	Slide,
	Navigation as HooperNavigation
} from 'hooper'
import 'hooper/dist/hooper.css'

var interval = null

export default {
	name: 'landing',
	components: {
		LayoutContainer,
		CustomButton,
		LineChartNemStats,
		BarChartSkinDataPerDay,
		LandingHeader,
		LandingFooter,
		Hooper,
		Slide,
		HooperNavigation
	},
	data() {
		return {
			lineChartData: {},
			pieBarChartData: {},
			hooperSettings: {
				autoPlay: true,
				itemsToShow: 1,
				centerMode: true,
				playSpeed: 5000,
				transition: 2000,
				infiniteScroll: true,
				wheelControl: false
			}
		}
	},
	methods: {
		intialiseCharts() {
			// console.log(PieChartSkinData)
			// console.log(BarChartTransCheckedPerType)
			// this.$store.commit('Common/SHOW_BASE_LOADER', true)
			Promise.all([this.$store.dispatch('Common/GET_NEM_STATS'), this.$store.dispatch('Common/GET_SKINDATA_DASHBOARD')]).then((results) => {
				this.lineChartData = results[0]
				this.pieBarChartData = results[1]
				return Promise.resolve()
			}).then(() => {
				// this.$store.commit('Common/SHOW_BASE_LOADER', false)
			})
		}
	},
	mounted() {
		this.intialiseCharts()
		interval = setInterval(() => {
			this.intialiseCharts()
		}, 300000)
	},
	beforeDestroy() {
		clearInterval(interval)
	}
}
