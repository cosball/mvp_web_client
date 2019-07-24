const _service = {
	getItem: function getItem(key) {
		return new Promise((resolve, reject) => {
            const obj = window.localStorage.getItem(key)
            const value = obj ? JSON.parse(obj)[key] : undefined
			resolve(value)
		})
    },
    setItem: function setItem(key, value) {
		return new Promise((resolve, reject) => {
            const json = JSON.stringify({[key]: value})
            window.localStorage.setItem(key, json)
			resolve()
		})
    },
    removeItem: function removeItem(key) {
		return new Promise((resolve, reject) => {
            window.localStorage.removeItem(key)
			resolve()
		})
    },
    clear: function clear(key) {
		return new Promise((resolve, reject) => {
            window.localStorage.clear()
			resolve()
		})
    }
}

export default _service
