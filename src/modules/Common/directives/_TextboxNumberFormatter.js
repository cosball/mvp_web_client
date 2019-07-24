/**
 * KIV: not being used
 */

export default {
	name: 'textbox-number-formatter',
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
		if (!binding.value) {
			// ONLY IF the false is declared, stop running and kill the directive
			return
		}

		var formatNumber = function(value) {
			value = value.toString()
			value = value.replace(/[^0-9.]/g, '')
			var parts = value.split('.')
			parts[0] = parts[0].replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,')
			if (parts[1] && parts[1].length > 2) {
				parts[1] = parts[1].substring(0, 2)
			}
			return parts.join('.')
		}

		var applyFormatting = function(value) {
			var original = value
			if (!value || value.length === 0) {
				return
			}
			value = formatNumber(value)
			if (value !== original) {
				iElement.value = value
				iElement.triggerHandler('input')
			}
		}

		iElement.addEventListener('keyup', function() {
			applyFormatting(iElement.value)
        })

        iElement.addEventListener('blur', function() {
			applyFormatting(iElement.value)
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
				applyFormatting(fieldValue)
			}
		})
	}
}
