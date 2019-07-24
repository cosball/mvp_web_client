import {
	isString,
	reduce
} from 'lodash'

const _service = {
	getElementHeight: function(el) {
		const computedStyle = window.getComputedStyle(el)
		const height = parseInt(computedStyle.height)
		const marginTop = parseInt(computedStyle.marginTop)
		const marginBottom = parseInt(computedStyle.marginBottom)

		return (height + marginTop + marginBottom)
	},
	getElementWidth: function(el) {
		const computedStyle = window.getComputedStyle(el)
		const width = parseInt(computedStyle.width)
		const marginLeft = parseInt(computedStyle.marginLeft)
		const marginRight = parseInt(computedStyle.marginRight)

		return (width + marginLeft + marginRight)
	},
	getListMinMaxByObjKey(list, key) {
		return reduce(list, (result, obj) => {
			if (obj[key] < result.min) result.min = obj[key]
			if (obj[key] > result.max) result.max = obj[key]
			return result
		}, {
			min: Number.MAX_VALUE,
			max: 0
		})
	},
	calculateDateOfBirth: function(ic) {
		if (ic.match(/^(\d{2})(\d{2})(\d{2})-?\d{2}-?\d{4}$/)) {
			var year = RegExp.$1
			var month = RegExp.$2
			var day = RegExp.$3

			var now = new Date().getFullYear().toString()

			var decade = now.substr(0, 2)
			if (now.substr(2, 2) > year) {
				year = parseInt(decade.concat(year.toString()), 10)
			}

			var date = new Date(year, (month - 1), day)
			return date
		} else {
			console.error('not a proper IC format')
			return new Date()
		}
	},
	calculateAge: function(dob) { // birthday is a date
		dob = isString(dob) ? new Date(dob) : dob
		var ageDifMs = Date.now() - dob.getTime()
		var ageDate = new Date(ageDifMs) // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970).toString()
	},
	formatCurrency: function formatCurrency(value) {
		value = value !== undefined ? value.toString() : ''
		const decimalIndex = value.indexOf('.')
		let integer = value
		let decimal = ''

		if (decimalIndex > -1) {
			integer = value.substring(0, decimalIndex)
			decimal = value.substring(decimalIndex)
		}

		integer = integer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

		return `${integer}${decimal}`
	},
	unformatCurrency: function unformatCurrency(value) {
		return value.replace(/,/g, '')
	},
	formatPhone: function formatPhone(value) {
		value = value !== undefined ? value.toString() : ''
		if (value.length <= 4) {
			return value
		}

		let frontNumber = value.substring(0, value.length - 4)
		const backNumber = value.substring(value.length - 4)
		frontNumber = frontNumber.toString().replace(/\B(?=([\d-+]{3})+(?![\d-+]))/g, ' ')

		return `${frontNumber} ${backNumber}`
	},
	unformatPhone: function unformatPhone(value) {
		return value.replace(/ /g, '')
	},
	s4: function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1)
	},
	guid: function guid() {
		return _service.s4() + _service.s4() + '-' + _service.s4() + '-' + _service.s4() +
			'-' + _service.s4() + '-' + _service.s4() + _service.s4() + _service.s4()
	}
}

export default _service
