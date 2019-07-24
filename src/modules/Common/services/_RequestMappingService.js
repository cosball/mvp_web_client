const _service = {
	mapAppData: function mapAppData(appData) {
		return {
		}
	},
	mapConfigLimitData: function mapConfigLimitData(username, configs) {
		let idx = configs.findIndex((item) => item.username === username)
		if (idx > 0) {
			return configs[idx]
		} else {
			return configs.find((item) => item.username === 'DefaultUser')
		}
	}
}

export default _service
