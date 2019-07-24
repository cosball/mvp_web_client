/**
 * KIV: not being used
 */

export default {
	name: 'form-input-blocker',
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
	componentUpdated: function(iElement, {value, oldValue}) {
		let regexStr = '^[-a-zA-Z0-9_%@#\\s\'".,()/\\\\]*$'
		let regex = new RegExp(regexStr)
		iElement.addEventListener('keypress', function(e) {
			if (e.which !== 0 && e.which !== 8 && !e.ctrlKey && !e.metaKey && !e.altKey) {
				var keyChar = String.fromCharCode(e.which)
				var fieldValue = iElement.value
				var resultString = fieldValue.substring(0, e.target.selectionStart) + keyChar + fieldValue.substring(e.target.selectionEnd)

				if (!regex.test(resultString)) {
					e.preventDefault()
				}
			}
		})
		iElement.addEventListener('change', function() {
			var formattedInput = iElement.value.replace(/[^-a-zA-Z0-9_%@#\s'".,()/\\]/gi, '')
			iElement.value = formattedInput
		})

		iElement.addEventListener('paste', function(e) {
			var fieldValue = iElement.value
			var clipboardData = ''

			if ((e.originalEvent || e).clipboardData) {
				clipboardData = (e.originalEvent || e).clipboardData.getData('text/plain')
			} else {
				clipboardData = window.clipboardData.getData('text')
			}

			var resultString = fieldValue.substring(0, e.target.selectionStart) + clipboardData + fieldValue.substring(e.target.selectionEnd)
			if (!regex.test(resultString)) {
				e.preventDefault()
			}
		})
	}
}
