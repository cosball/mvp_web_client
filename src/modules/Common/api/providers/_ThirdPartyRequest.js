import axios from 'axios'

import {
	EventBusService
} from '@/modules/Common/services'

const ThirdPartyRequest = axios.create({
	timeout: 30000, // 30s
	maxContentLength: 20000, // 20KB
})

ThirdPartyRequest.interceptors.request.use(config => {
	// TODO: update request headers
	return config
}, error => {
	console.group('[Axios][Interceptor] Request Error')
	console.log(error)
	console.groupEnd()
	return Promise.reject(error)
})

ThirdPartyRequest.interceptors.response.use(res => {
	return res.data
}, error => {
	console.group('[Axios][Interceptor] Response Error')
	console.log(error)
	console.log('Error Response:', error.response)
	console.groupEnd()

	let businessError = true
	if (error.response && error.response.status) {
		// custom config "silent" to prevent global error alert
		if (!error.response.config.silent) {
			if (error.response.status >= 500) {
				businessError = false
				EventBusService.$emit('SERVER_ERROR', error)
			} else if (error.response.status >= 400) {
				businessError = false
				EventBusService.$emit('REQUEST_ERROR', error)
			}
		}
	} else {
		businessError = false
		EventBusService.$emit('NETWORK_ERROR', error)
	}

	if (businessError) {
		return Promise.resolve(error.response.data)
	} else {
		return Promise.reject(error)
	}
})

export default ThirdPartyRequest
