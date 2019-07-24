import {
    AuthRequest,
    UserRestRequest,
	WebAdminRestRequest
} from '@/modules/Common/api/providers'

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
			WebAdminRestRequest.post('/users/signup', signUpUserObj).then((res) => {
				resolve(res)
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
