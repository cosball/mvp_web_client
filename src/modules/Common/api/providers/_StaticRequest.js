import axios from 'axios'

import {
	EventBusService
} from '@/modules/Common/services'

const staticRequest = axios.create({
    baseURL: 'http://localhost:8888/static'
})

staticRequest.defaults.timeout = 5000

staticRequest.interceptors.request.use(config => {
	// TODO: update request headers
	return config
}, error => {
	console.group('[Axios][Interceptor] Request Error')
	console.log(error)
	console.groupEnd()
	return Promise.reject(error)
})

staticRequest.interceptors.response.use(data => {
	return data
}, error => {
	console.group('[Axios][Interceptor] Response Error')
	console.log(error)
    console.groupEnd()

    if (error.response.status >= 500) {
        EventBusService.$emit('SERVICE_ERROR')
    } else if (error.response.status >= 404) {
        EventBusService.$emit('REQUEST_UNAVAILABLE')
    }

	return Promise.reject(error)
})

export default staticRequest
