export default {
	SET_SKINDATA: (state, skindata) => {
		state.skindata.location = skindata.location
		state.skindata.weather = skindata.weather
		state.skindata.temperature = skindata.temperature
		state.skindata.humidity = skindata.humidity
		state.skindata.pressure = skindata.pressure
		state.skindata.moisture = skindata.moisture
		state.skindata.oil = skindata.oil
		state.skindata.pore = skindata.pore
		state.skindata.skinTemperature = skindata.skinTemperature
		state.skindata.skinTone = skindata.skinTone
		state.skindata.wrinkle = skindata.wrinkle
		state.skindata.rewardPoint = skindata.rewardPoint
		state.skindata.recommenedCosball = skindata.recommenedCosball
		state.skindata.transactionHash = skindata.transactionHash
		state.skindata.createdAt = skindata.createdAt
	},
	SET_ROUTE_LEAVE_GUARD_ACTIVE: (state, active) => {
		state.isRouteLeaveGuardActive = active
	},
	SET_SKINDATA_DATA_UPDATED: (state, updated) => {
		state.skindataDataUpdated = updated
	}
}
