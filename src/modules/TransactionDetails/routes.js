import {
	TransactionDetails
} from './views'

import {
	BaseView
} from '@/modules/Common/views'

export default [{
	path: '//',
	name: 'transactionDetailsBase',
	redirect: '/transaction-details',
	component: BaseView,
	children: [{
		path: '/',
		redirect: 'transaction-details',
		name: 'transactionDetailsParent',
		component: {
			render(c) {
				return c('router-view')
			}
		},
		children: [{
			path: 'transaction-details',
			component: TransactionDetails,
			name: 'transactionDetails',
			meta: {
				screenName: 'transactionDetails',
				showHeader: true,
				showMenuPane: true,
				SCRN_CODE: 'SCRNTRANSACTIONDETAILS',
				moduleCd: 'TransactionDetails'
			}
		}]
	}]
}]
