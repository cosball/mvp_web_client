import {
    AccountSettings
} from './views'

import {
	BaseView
} from '@/modules/Common/views'

export default [
  {
    path: '//',
    name: 'accountSettingsBase',
    redirect: '/account-settings',
    component: BaseView,
    children: [
      {
        path: '/',
				redirect: 'account-settings',
				name: 'accountSettingsParent',
        component: {
          render(c) {
            return c('router-view')
          }
        },
        children: [
          {
						path: 'account-settings',
						component: AccountSettings,
						name: 'accountSettings',
            meta: {
							screenName: 'accountSettings',
							showHeader: true,
							showMenuPane: true,
              SCRN_CODE: 'SCRNACCOUNTSETTINGS',
              moduleCd: 'AccountSettings'
            }
          }
        ]
      }
    ]
  }
]
