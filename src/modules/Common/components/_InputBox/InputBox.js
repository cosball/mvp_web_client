import {
	UtilService
} from '@/modules/Common/services'

export default {
	name: 'input-box',
	data() {
		return {
			prevModelValue: this.value
		}
	},
	props: {
		fieldId: {
			type: String,
			required: false
		},
		inputClass: {
			type: String
		},
		placeholder: {
			type: String,
			default() {
				return 'Enter'
			}
		},
		readonlyPlaceholder: {
			type: String,
			default: ''
		},
		value: {
			type: String,
			default: ''
		},
		type: {
			// any valid html input type
			type: String,
			default: 'text'
		},
		format: {
			// general | currency | number | phone
			type: String,
			default: 'general'
		},
		formatOptions: {
			/**
			 * // general
			 * {
			 * 		maxLength: Number
			 * }
			 ********************************
			 * // currency
			 * {
			 * 		integerLength: Number
			 * 		decimalLength: Number
			 * }
			 ********************************
			 * // number
			 * {
			 * 		integerLength: Number
			 * 		decimalLength: Number
			 * }
			 ********************************
			 * // phone
			 * {
			 * 		maxLength: Number
			 * }
			 */
			type: Object,
			default() {
				return {}
			}
		},
		readonly: {
			type: Boolean
		}
	},
	computed: {
		computedType() {
			if (this.type) {
				return this.type === 'number' ? 'tel' : this.type
			} else {
				return 'text'
			}
		},
		computedFormatOptions() {
			// verify format options
			if (this.format === 'general' || this.format === 'userId') {
				return getGeneralFormatOptions(this.formatOptions)
			} else if (this.format === 'currency' || this.format === 'number') {
				return getNumberFormatOptions(this.formatOptions)
			} else if (this.format === 'phone') {
				return getPhoneFormatOptions(this.formatOptions)
			}

			// fallback option
			return getGeneralFormatOptions(this.formatOptions)
		},
		computedValue: {
			get() {
				// format input for display
				return formatValue(this.format, this.value)
			},
			set(value) {
				this.$emit('input', value)
			}
		},
		regex() {
			// generate regex to verify input
			if (this.format === 'general') {
				return getGeneralRegex(this.computedFormatOptions)
			} else if (this.format === 'currency') {
				return getCurrencyRegex(this.computedFormatOptions)
			} else if (this.format === 'number') {
				return getNumberRegex(this.computedFormatOptions)
			} else if (this.format === 'phone') {
				return getPhoneRegex(this.computedFormatOptions)
			}

			// fallback regex
			return getGeneralRegex()
		}
	},
	methods: {
		sanitizePasteInput(e) {
			const fieldValue = e.target.value
			let clipboardData = ''

			if ((e.originalEvent || e).clipboardData) {
				clipboardData = (e.originalEvent || e).clipboardData.getData('text/plain')
			} else {
				clipboardData = window.clipboardData.getData('text')
			}

			const resultString = fieldValue.substring(0, e.target.selectionStart) + clipboardData + fieldValue.substring(e.target.selectionEnd)

			// prevent default event if input is invalid
			if (!this.regex.test(unformatValue(this.format, resultString))) {
				e.preventDefault()
			}

			// prevent default event if no input change
			if (isModelValueUnchange(this.format, resultString, this.prevModelValue)) {
				e.target.setSelectionRange(e.target.selectionEnd, e.target.selectionEnd)
				e.preventDefault()
			}
		},
		onInput(e) {
			let currentCaretPos = e.target.selectionStart
			let currentInput = e.target.value

			// sanitize input
			if (currentInput !== '' && !this.regex.test(unformatValue(this.format, currentInput))) {
				e.target.value = formatValue(this.format, this.prevModelValue)
				return
			}

			// check if formatted value change, but model value unchange
			if (isModelValueUnchange(this.format, currentInput, this.prevModelValue)) {
				const formattedValue = formatValue(this.format, this.prevModelValue)
				// formatter as input, block input
				if (currentInput.length >= formattedValue.length) {
					e.target.value = formattedValue
					return
				}

				// formatter is deleted, delete additional character before caret
				while (isModelValueUnchange(this.format, currentInput, this.prevModelValue)) {
					const frontValue = currentInput.substring(0, currentCaretPos - 1)
					const backValue = currentInput.substring(currentCaretPos)
					currentInput = frontValue + backValue
					currentCaretPos -= 1
				}
			}

			// unformat input to save as model value
			let unformattedValue = unformatValue(this.format, currentInput)
			this.prevModelValue = unformattedValue

			// trigger computedValue setter
			this.computedValue = unformattedValue

			// reset caret position from formatting
			this.$nextTick(() => {
				const lengthDiff = this.computedValue.length - currentInput.length
				const newCaretPos = currentCaretPos + lengthDiff
				e.target.setSelectionRange(newCaretPos, newCaretPos)
			})
		},
		onFocus(e) {
			this.$emit('focus', e)
		},
		onBlur(e) {
			this.$emit('blur', e)
		},
		onKeyupEnter(e) {
			e.target.blur()
			this.$emit('enter', e)
		},
		onKeydownEnter(e) {
			this.$emit('keydown', e)
		}
	},
	watch: {
		value(newVal) {
			if (newVal !== this.prevModelValue) {
				this.prevModelValue = newVal
			}
		}
	},
	created: function() {
		this.$emit('init')
	},
	mounted: function() {},
	updated: function() {
		this.$nextTick(function() {
			// Code that will run only after the
			// entire view has been re-rendered
			this.$emit('change')
		})
	},
	destroyed: function() {
		this.$emit('destroyed')
	}
}

/**
 * Regex getter
 */
function getGeneralRegex({
	maxLength
}) {
	const regexStr = `^[-a-zA-Z0-9_%@#\\s'".,()/\\\\]{1,${maxLength}}$`
	return new RegExp(regexStr)
}

function getNumberRegex({integerLength, decimalLength}) {
	const integerRegex = `(0|0[1-9]{1,${integerLength}}|[1-9]\\d{0,${integerLength - 1}})`
	const regexStr = decimalLength > 0
			? 	`(^${integerRegex}$)` +		// integer only
				`|(^${integerRegex}\\.$)` + // integer with decimal separator
				`|(^${integerRegex}\\.\\d{1,${decimalLength}}$)`	// integer with decimals
			: 	`^${integerRegex}$`
	return new RegExp(regexStr)
}

function getCurrencyRegex({integerLength, decimalLength}) {
	const regexStr = decimalLength > 0
			? 	`(^\\d{1,${integerLength}}$)` +		// integer only
				`|(^\\d{1,${integerLength}}\\.$)` + // integer with decimal separator
				`|(^\\d{1,${integerLength}}\\.\\d{1,${decimalLength}}$)`	// integer with decimals
			: 	`^\\d{1,${integerLength}}$`
	return new RegExp(regexStr)
}

function getPhoneRegex({
	maxLength
}) {
	const regexStr = `[\\d-+]{1,${maxLength}}$`
	return new RegExp(regexStr)
}

/**
 * FormatOptions getter
 */
function getGeneralFormatOptions({
	maxLength
}) {
	return {
		maxLength: maxLength || 999999
	}
}

function getNumberFormatOptions({
	integerLength,
	decimalLength
}) {
	return {
		integerLength: integerLength || 9,
		decimalLength: decimalLength === undefined ? 2 : decimalLength
	}
}

function getPhoneFormatOptions({
	maxLength
}) {
	return {
		maxLength: maxLength || 16
	}
}

/**
 * Value formatter
 */
function formatValue(format, value) {
	let formattedValue = value

	if (format === 'currency') {
		formattedValue = UtilService.formatCurrency(value)
	} else if (format === 'phone') {
		formattedValue = UtilService.formatPhone(value)
	}
	return formattedValue
}

function unformatValue(format, value) {
	let unformattedValue = value

	if (format === 'currency') {
		unformattedValue = UtilService.unformatCurrency(value)
	} else if (format === 'phone') {
		unformattedValue = UtilService.unformatPhone(value)
	}

	return unformattedValue
}

/**
 * Helper function
 */
function isModelValueUnchange(format, value, prevModelValue) {
	const unformattedValue = unformatValue(format, value)
	const isSameModelValue = (unformattedValue === prevModelValue)
	const isDiffFormattedValue = (value !== formatValue(format, unformattedValue))

	return (isSameModelValue && isDiffFormattedValue)
}
