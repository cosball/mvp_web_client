const _service = {
	formatBytes: function formatBytes(bytes, decimals = 2) {
		if (bytes === 0) return '0 Bytes'
		const k = 1024
		const dm = decimals < 0 ? 0 : decimals
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
		const i = Math.floor(Math.log(bytes) / Math.log(k))
		return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
	},
	getFileExtension: function getFileExtension(file) {
		return file.slice((Math.max(0, file.lastIndexOf('.')) || Infinity) + 1)
	},
	toDataURL: function toDataURL(file) {
		return new Promise((resolve, reject) => {
			var reader = new FileReader()
			reader.onloadend = function(e) {
				resolve(e.target.result)
			}
			reader.readAsDataURL(file)
		})
	},
	checkFileExtension: function checkFileExtension(file, fileExt) {
		return new Promise((resolve, reject) => {
			if (file) {
				let idx = fileExt.split(', ').indexOf(`.${_service.getFileExtension(file.name)}`.toLowerCase())
				if (idx > -1) {
					resolve()
				} else {
					reject()
				}
			} else {
				reject()
			}
		})
	},
	checkFileSize: function checkFileSize(file, fileSize) {
		return new Promise((resolve, reject) => {
			if (file) {
				if (file.size < fileSize) {
					resolve()
				} else {
					reject()
				}
			}
			reject()
		})
	}
}

export default _service
