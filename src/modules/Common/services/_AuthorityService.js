import store from '@/store'

import {
	includes
} from 'lodash'

const _service = {
	hasAppAuthority: function hasAppAuthority(auth) {
		return includes(store.state.Common.appAuthorityList, auth)
	},
	hasUserAuthority: function hasUserAuthority(auth) {
		// tbc handling
		return true
	}
}

export default _service
