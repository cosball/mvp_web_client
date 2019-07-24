import {
	Landing,
	Faq,
	Privacy,
	TermsConditions,
	SignUp,
	ForgotPassword,
	NewPasswordSent,
	ResetPasswordPage,
	ResetMessagePage,
	FirstTimeLogin,
	FirstTimeLoginMessageSuccess,
	TempPassswordExpired
} from './views'

import {
	BaseView
} from '@/modules/Common/views'

export default [{
	path: '*',
	name: 'default',
	redirect: '/landing'
}, {
	path: '//',
	name: 'landingBase',
	redirect: '/landing',
	component: BaseView,
	children: [{
		path: '/',
		redirect: 'landing',
		name: 'landingParent',
		component: {
			render(c) {
				return c('router-view')
			}
		},
		children: [{
				path: 'landing',
				component: Landing,
				name: 'landing',
				meta: {
					screenName: 'Landing',
					isSecured: false,
					showHeader: false,
					showMenuPane: false,
					SCRN_CODE: 'SCRNLANDING',
					moduleCd: 'Landing'
				}
			}, {
				name: 'faq',
				path: '/faq',
				component: Faq,
				meta: {
					screenName: 'Faq',
					isSecured: false,
					showHeader: false,
					showMenuPane: false,
					SCRN_CODE: 'SCRNFAQ',
					moduleCd: 'Landing'
				}
			},
			{
				name: 'privacy',
				path: '/privacy',
				component: Privacy,
				meta: {
					screenName: 'Privacy',
					isSecured: false,
					showHeader: false,
					showMenuPane: false,
					SCRN_CODE: 'SCRNPRIVACY',
					moduleCd: 'Landing'
				}
			},
			{
				name: 'termsConditions',
				path: '/terms-conditions',
				component: TermsConditions,
				meta: {
					screenName: 'TermsConditions',
					isSecured: false,
					showHeader: false,
					showMenuPane: false,
					SCRN_CODE: 'SCRNPRIVACY',
					moduleCd: 'Landing'
				}
			},
			{
				name: 'forgotPassword',
				path: '/forgot-password',
				component: ForgotPassword,
				meta: {
					screenName: 'ForgotPassword',
					isSecured: false,
					showHeader: false,
					showMenuPane: false,
					SCRN_CODE: 'SCRNFORGOTPASSWORD',
					moduleCd: 'Landing'
				}
			},
			{
				name: 'tempPassswordExpired',
				path: '/temp-password-expired',
				component: TempPassswordExpired,
				meta: {
					screenName: 'TempPassswordExpired',
					isSecured: false,
					showHeader: false,
					showMenuPane: false,
					SCRN_CODE: 'SCRNTEMPPASSWORDEXPIRED',
					moduleCd: 'Landing'
				}
			},
			{
				name: 'firstTimeLogin',
				path: '/first-time-login',
				component: FirstTimeLogin,
				meta: {
					screenName: 'FirstTimeLogin',
					showHeader: false,
					showMenuPane: false,
					SCRN_CODE: 'SCRNFIRSTTIMELOGIN',
					moduleCd: 'Landing'
				}
			}, {
				name: 'newPasswordSent',
				path: '/new-password-sent',
				component: NewPasswordSent,
				meta: {
					screenName: 'NewPasswordSent',
					isSecured: false,
					showHeader: false,
					showMenuPane: false,
					SCRN_CODE: 'SCRNNEWPASSWORDSENT',
					moduleCd: 'Landing'
				}
			},
			{
				name: 'resetPasswordPage',
				path: '/reset-password-page',
				component: ResetPasswordPage,
				meta: {
					screenName: 'ResetPasswordPage',
					isSecured: false,
					showHeader: false,
					showMenuPane: false,
					SCRN_CODE: 'SCRNRESETPASSWORDPAGE',
					moduleCd: 'Landing'
				}
			},
			{
				name: 'resetMessagePage',
				path: '/reset-Message-page',
				component: ResetMessagePage,
				meta: {
					screenName: 'ResetMessagePage',
					isSecured: false,
					showHeader: false,
					showMenuPane: false,
					SCRN_CODE: 'SCRNRESETMESSAGEPAGE',
					moduleCd: 'Landing'
				}
			},
			{
				name: 'firstTimeLoginMessageSuccess',
				path: '/first-time-login-message-success',
				component: FirstTimeLoginMessageSuccess,
				meta: {
					screenName: 'FirstTimeLoginMessageSuccess',
					isSecured: false,
					showHeader: false,
					showMenuPane: false,
					SCRN_CODE: 'SCRNFIRSTTIMELOGINMESSAGESUCCESS',
					moduleCd: 'Landing'
				}
			},
			{
				name: 'signUp',
				path: 'signup',
				component: SignUp,
				meta: {
					screenName: 'SignUp',
					isSecured: false,
					showHeader: false,
					showMenuPane: false,
					SCRN_CODE: 'SCRNSIGNUP',
					moduleCd: 'Landing'
				}
			}
		]
	}]
}]
