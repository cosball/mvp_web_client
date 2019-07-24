export default {
	SET_SKINDATA: (state, skindata) => {
		state.skindata.address = skindata.address !== undefined ? skindata.address : ''
		state.skindata.addressType = skindata.addressType !== undefined ? skindata.addressType : ''
		state.skindata.reason = skindata.reason !== undefined ? skindata.reason : null
		state.skindata.remark = skindata.remark !== undefined ? skindata.remark : ''
		state.skindata.status = skindata.status !== undefined ? skindata.status : 0
	},
	SET_ROUTE_LEAVE_GUARD_ACTIVE: (state, active) => {
		state.isRouteLeaveGuardActive = active
	},
	SET_SKINDATA_DATA_UPDATED: (state, updated) => {
		state.skindataDataUpdated = updated
	}
}
