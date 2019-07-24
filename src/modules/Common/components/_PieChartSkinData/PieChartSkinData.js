import Chart from 'chart.js'

export default {
	name: 'pie-chart-skindata',
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
			var ctx = this.$refs[this.refId]
			ctx.style.backgroundColor = '#0c0032FF'
			// ctx.style.marginTop = '25px'
			// ctx.height = 220
			if (this.chart)	{
				this.chart.destroy()
			}
			this.chart = new Chart(ctx, {
				type: 'pie'
			})

			this.chart.data = {
				labels: Object.keys(this.list.skindataPerType),
				datasets: [{
					backgroundColor: ['#0000FF', '#4169E1', '#483D8B', '#1E90FF', '#00BFFF', '#87CEEB'],
					data: Object.values(this.list.skindataPerType)
				}]
			}
			this.chart.options = {
				responsive: true,
				maintainAspectRatio: false,
				elements: {
					arc: {
						borderWidth: 1
					}
				},
				legend: {
					display: true,
					position: 'right',
					labels: {
						fontColor: 'white'
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
