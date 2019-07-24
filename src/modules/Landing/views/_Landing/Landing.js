import {
	LayoutContainer,
	CustomButton,
	LineChartNemStats,
    PieChartSkinData,
    BarChartTransCheckedPerType,
    BarChartSkinDataPerPeriod
} from '@/modules/Common/components'

import {
	LandingHeader,
	LandingFooter
} from '@/modules/Landing/components'

var interval = null

export default {
	name: 'landing',
	components: {
		LayoutContainer,
		CustomButton,
		LineChartNemStats,
        PieChartSkinData,
        BarChartTransCheckedPerType,
        BarChartSkinDataPerPeriod,
		LandingHeader,
		LandingFooter
	},
	data() {
		return {
			lineChartData: {},
			pieBarChartData: {}
		}
	},
	methods: {
		intialiseCharts() {
			// console.log(PieChartSkinData)
			// console.log(BarChartTransCheckedPerType)
            this.$store.commit('Common/SHOW_BASE_LOADER', true)
            Promise.all([this.$store.dispatch('Common/GET_NEM_STATS'), this.$store.dispatch('Common/GET_SKINDATA_DASHBOARD')]).then((results) => {
                this.lineChartData = results[0]
                this.pieBarChartData = results[1]
                return Promise.resolve()
            }).then(() => {
                this.$store.commit('Common/SHOW_BASE_LOADER', false)
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
