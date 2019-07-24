import {
	reduce
} from 'lodash'

import {
	UtilService
} from '@/modules/Common/services'

import moment from 'moment'

export default {
	initials(value) {
		if (!value) return value
		let words = value.split(' ').slice(0, 3)
		return reduce(words, (result, word) => {
			result += word.substr(0, 1)
			return result
		}, '')
	},
	currency(value) {
		if (isNaN(value)) return value
		return UtilService.formatCurrency(value)
	},
	phone(value) {
		if (!value) return value
		return UtilService.formatPhone(value)
	},
	decimals(value, length = 2) {
		if (isNaN(value)) return value
		value = parseFloat(value)
		return value.toFixed(length)
	},
	formatDate(value, format = 'DD-MMM-YYYY') {
		return moment(value).format(format)
	}

}
