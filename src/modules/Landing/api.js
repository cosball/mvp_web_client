import {
    AuthRequest,
    UserRestRequest,
	WebAdminRestRequest,
	BlockChainApiRequest
} from '@/modules/Common/api/providers'

import {
	EncryptionService
} from '@/modules/Common/services'

const LandingApi = {
	userForgotPassword(email) {
        return new Promise((resolve, reject) => {
            AuthRequest.post('/users/reset', {email}).then(res => {
                resolve()
            })
            .catch(err => {
                reject(err)
            })
        })
    },
    userResetPassword(newPassword) {
		return new Promise((resolve, reject) => {
			UserRestRequest.post('/users/reset-password', newPassword).then((res) => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
    },
    userChangePassword(oldPassword, newPassword) {
		return new Promise((resolve, reject) => {
			UserRestRequest.post('/users/change-password', { oldPassword, newPassword }).then((res) => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	signUp(signUpUserObj) {
		return new Promise((resolve, reject) => {
			var text = process.env.VUE_APP_WEB_ADMIN_ACCESS_TOKEN + ',' + Date.now() + ',' + signUpUserObj.username
			var token = EncryptionService.encrypt(text)
			signUpUserObj['token'] = token
			WebAdminRestRequest.post('/users', signUpUserObj).then((res) => {
				BlockChainApiRequest.post('/account/signup', { username: signUpUserObj.username, token: token }).then((res) => {
					resolve(res)
				}).catch(err => {
					reject(err)
				})
			}).catch(err => {
				reject(err)
			})
		})
	},
	contactUs(contactUsObj) {
		return new Promise((resolve, reject) => {
			WebAdminRestRequest.post('/users/contactus', contactUsObj).then((res) => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	}
}

export {
    LandingApi
}
