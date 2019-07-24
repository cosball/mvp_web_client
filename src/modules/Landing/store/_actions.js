
import {
	LandingApi
} from '@/modules/Landing/api/'

export default {
	UPDATE_USER_PASSWORD: ({commit, state}, email) => {
		return new Promise((resolve, reject) => {
			LandingApi.userForgotPassword(email)
				.then(() => {
					resolve()
				}, () => {
					reject('Failed to update user password')
				})
		})
    },
    SET_NEW_PASSWORD: ({commit, state}, newPassword) => {
		return new Promise((resolve, reject) => {
			LandingApi.userResetPassword(newPassword)
				.then(() => {
					resolve()
				}, () => {
					reject('Failed to set new password')
				})
		})
    },
    CHANGE_PASSWORD: ({commit, state}, {oldPassword, newPassword}) => {
		return new Promise((resolve, reject) => {
			LandingApi.userChangePassword(oldPassword, newPassword)
				.then(() => {
					resolve()
				}, () => {
					reject('Failed to change password')
				})
		})
	},
	SIGN_UP: ({commit, state}, signUpObjects) => {
		return new Promise((resolve, reject) => {
			LandingApi.signUp(signUpObjects)
				.then(() => {
					resolve()
				}, () => {
					reject('Failed to SIGN_UP')
				})
		})
	},
	CONTACT_US: ({commit, state}, contactUsObj) => {
		return new Promise((resolve, reject) => {
			LandingApi.contactUs(contactUsObj)
				.then(() => {
					resolve()
				}, () => {
					reject('Failed to CONTACT_US')
				})
		})
	}
}
