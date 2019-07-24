import Chart from 'chart.js'

export default {
	name: 'bar-chart-trans-checked-per-type',
	data() {
		return {}
	},
	props: {
		list: {
			type: Object,
			required: true
		},
		refId: {
			type: String,
			required: true
		}
	},
	computed: {

	},
	methods: {
		generateChart() {
			var ctx = this.$refs[this.refId].getContext('2d')
			var gradient = ctx.createLinearGradient(0, 0, 0, 600)
			gradient.addColorStop(0, '#00008B')
			gradient.addColorStop(1, '#00BFFF')
			if (this.chart)	{
				this.chart.destroy()
			}
			this.chart = new Chart(ctx, {
				type: 'bar'
			})
			this.chart.data = {
				labels: Object.keys(this.list.transCheckedPerType),
				datasets: [{
					backgroundColor: gradient,
					hoverBackgroundColor: gradient,
					data: Object.values(this.list.transCheckedPerType)
				}]
			}

			this.chart.options = {
				responsive: true,
				maintainAspectRatio: false,
				responsiveAnimationDuration: 100,
				legend: {
					display: false
				},
				scales: {
					xAxes: [{
						ticks: {
							fontColor: 'white'
						}
					}],
					yAxes: [{
						ticks: {
							min: 0,
							fontColor: 'white'
						}
					}]
				}
			}
			this.chart.update()
		}
	},
	watch: {
		list: function() {
			this.generateChart()
		}
	},
}
