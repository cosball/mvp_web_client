const _service = {
	mapSkinDataData: function mapSkinDataData(data) {
		return JSON.stringify({
            addressType: data.addressType,
            reason: data.reason,
            remark: data.remark,
            status: data.status
		})
	}
}

export default _service
