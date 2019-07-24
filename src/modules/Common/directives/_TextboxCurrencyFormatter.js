/**
 * KIV: not being used
 */

export default {
	name: 'textbox-currency-formatter',
	/**
	 * Called after the containing component has updated,
	 * but possibly before its children have updated.
	 * The directive’s value may or may not have changed,
	 * but you can skip unnecessary updates by comparing the
	 * binding’s current and old values.
	 *
	 * @param {HTMLInputElement} el
	 * @param {?String}          value
	 * @param {?String}          oldValue
	 */
	componentUpdated: function(iElement, binding, VNode) {
		/*
		 * Checked parameters:
		 * --------------------
		 * textbox-currency-formatter ('true' / 'false') - Enable or disable formatter
		 * enforce-no-decimal ('true' / 'false') - Enable or disable decimal places
		 */

		let attrs = VNode.data.attrs
		let decimalPoint = attrs.numberOfDecimal || 2
		var regexCollection = {
			illegalCharacters: /[^0-9.-]+|(?!^)[-]+/g,
			multipleDecimals: /\.{5,}/g,
			noDecimals: /\.+/g,
			plusMinusCurrency: /^(?:-\$|\$-|-|\$)?[0-9,]+(?:.[0-9]+)?$/
		}

		if (!binding.value || !iElement.value) {
			// ONLY IF the false is declared, stop running and kill the directive
			return
		} else {
			// iElement.value = sanitizeInput(iElement.value)
		}

		function sanitizeInput(viewValue) {
			/*
			 * Basic sanitizer for model. Eliminates irrelevant non-number values. Checks for:
			 * 1. Non-numeric items AND any minus sign that is not directly in front of string. [illegalCharacters]
			 * 2. Multiple decimals. Optionally it can wipe off all decimals [multipleDecimals / noDecimals].
			 * 3. Any decimals (if enforceNoDecimal is true).
			 */
			if (!viewValue) {
				return
			}
			// Sanitize input
			var illegalInputSanitized = viewValue.toString().replace(regexCollection.illegalCharacters, '')
			var sanitizedValue, finalOutput
			if (attrs.enforceNoDecimal) {
				sanitizedValue = illegalInputSanitized.replace(regexCollection.noDecimals, '')
			} else {
				sanitizedValue = illegalInputSanitized.replace(regexCollection.multipleDecimals, '.')
			}

			var decimalSplitArray = sanitizedValue.split('.')
			var integerPart = decimalSplitArray[0]

			// Handle integer length scenario
			if (attrs.integerLength && integerPart.length > parseInt(attrs.integerLength)) {
				integerPart = integerPart.slice(0, parseInt(attrs.integerLength))
			}

			if (attrs.enforceNoDecimal || decimalSplitArray.length === 1) {
				finalOutput = integerPart
			} else {
				finalOutput = integerPart + '.' + decimalSplitArray[1].slice(0, decimalPoint)
			}

			return finalOutput
		}

		iElement.addEventListener('blur', function() {
			if (!iElement.value) {
				return
			}
			iElement.value = sanitizeInput(iElement.value)
		})

		iElement.addEventListener('paste', function(e) {
			var fieldValue = iElement.value
			var clipboardData = ''

			if ((e.originalEvent || e).clipboardData) {
				clipboardData = (e.originalEvent || e).clipboardData.getData('text/plain')
			} else {
				clipboardData = window.clipboardData.getData('text')
			}

			var regexStr = '^[-0-9_%@#\\s\'".,()/\\\\]*$'
			var regex = new RegExp(regexStr)
			var resultString = fieldValue.substring(0, e.target.selectionStart) + clipboardData + fieldValue.substring(e.target.selectionEnd)
			if (!regex.test(resultString)) {
				e.preventDefault()
			} else {
				iElement.value = sanitizeInput(iElement.value)
			}
		})

		iElement.addEventListener('keyup', function() {
			if (!iElement.value) {
				return
			}
			iElement.value = sanitizeInput(iElement.value)
        })
	}
}
