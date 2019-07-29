export default {
	SET_SKINDATA: (state, skindata) => {
	},
	SET_ROUTE_LEAVE_GUARD_ACTIVE: (state, active) => {
		state.isRouteLeaveGuardActive = active
	},
	SET_SKINDATA_DATA_UPDATED: (state, updated) => {
		state.skindataDataUpdated = updated
	}
}
