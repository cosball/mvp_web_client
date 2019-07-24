import moment from 'moment'

const _service = {
	getCurrentTime: function getCurrentTime() {
		return moment().format()
	},
	isToday: function isToday(date, format = moment.ISO_8601) {
		if (moment(date, format).isSame(moment(), 'day')) {
			return true
		}
		return false
	},
	isYesterday: function isYesterday(date, format = moment.ISO_8601) {
		if (moment(date, format).isSame(moment().subtract(1, 'days'), 'day')) {
			return true
		}
		return false
	}
}

export default _service
