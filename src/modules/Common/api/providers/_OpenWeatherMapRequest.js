import axios from 'axios'

import {
	EventBusService
} from '@/modules/Common/services'

const RestRequest = axios.create({
	baseURL: 'https://api.openweathermap.org/data/2.5/',
	timeout: 150000, // 15s
	maxContentLength: 20000, // 20KB
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
})

RestRequest.interceptors.request.use(config => {
	return new Promise((resolve, reject) => {
		// config.headers.Authorization = process.env.VUE_APP_WEB_ADMIN_ACCESS_TOKEN
		resolve(config)
	})
}, error => {
	console.group('[Axios][Interceptor] Request Error')
	console.log(error)
	console.groupEnd()
	return Promise.reject(error)
})

RestRequest.interceptors.response.use(res => {
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

export default RestRequest
