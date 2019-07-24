import Chart from 'chart.js'

export default {
	name: 'line-chart-nem-stats',
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
			var lastIndex = this.list.timestamps.length - 1
			var ctx = this.$refs[this.refId]
			ctx.style.backgroundColor = '#0c0032FF'
			if (this.chart)	{
				this.chart.destroy()
			}
			this.chart = new Chart(ctx, {
				type: 'line'
			})
			this.chart.data = {
				labels: this.list.heights,
				datasets: [{
						label: this.list.labels[0],
						type: 'line',
						borderColor: 'skyblue',
						backgroundColor: 'skyblue',
						fill: false,
						borderWidth: 1,
						pointRadius: 2,
						pointHoverRadius: 2,
						data: this.list.timestamps,
						pointStyle: 'line'
					},
					{
						label: this.list.labels[1],
						type: 'line',
						borderColor: 'red',
						backgroundColor: 'red',
						fill: false,
						borderWidth: 1,
						pointRadius: 1,
						pointHoverRadius: 1,
						data: this.list.averages,
						pointStyle: 'line'
					}
				]
			}
			this.chart.options = {
				responsive: true,
				maintainAspectRatio: false,
				responsiveAnimationDuration: 100,
				scales: {
					xAxes: [{
						ticks: {
							callback: function(value, index, values) {
								if ((index > 0 && index < 10) || (index < lastIndex && lastIndex - index < 10)) {
									return
								}
								var height = parseInt(value) % 20
								if ((index === 0) || (height === 0) || (index === lastIndex)) {
									return parseInt(value)
								}
							},
							autoSkip: false,
							fontColor: 'white'
						},
						stacked: true,
						scaleLabel: {
							display: true,
							labelString: 'block height',
							fontSize: 14,
							fontColor: 'white'
						},
						gridLines: {
							display: true,
							color: '#140543'
						}
					}],
					yAxes: [{
						ticks: {
							min: 0,
							fontColor: 'white'
						},
						stacked: false,
						scaleLabel: {
							display: true,
							labelString: 'secs',
							fontSize: 14,
							fontColor: 'white'
						},
						gridLines: {
							display: true,
							color: '#140543'
						}
					}]
				},
				legend: {
					display: true,
					labels: {
						fontColor: 'white'
					}
				},
				chartArea: {
					backgroundColor: 'rgba(0, 0, 0)',
					hover: {
						mode: 'nearest',
						intersect: true
					}
				},
				tooltips: {
					callbacks: {
						title: function(tooltipItem, chartData) {
							return chartData.labels[tooltipItem[0].index]
						},
						intersect: false
					}
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
