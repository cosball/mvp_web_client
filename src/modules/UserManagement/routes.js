import {
    UserManagement
} from './views'

import {
	BaseView
} from '@/modules/Common/views'

export default [
  {
    path: '//',
    name: 'userManagementBase',
    redirect: '/user-management',
    component: BaseView,
    children: [
      {
        path: '/',
				redirect: 'user-management',
				name: 'userManagementParent',
        component: {
          render(c) {
            return c('router-view')
          }
        },
        children: [
          {
						path: 'user-management',
						component: UserManagement,
						name: 'userManagement',
            meta: {
							screenName: 'userManagement',
							showHeader: true,
							showMenuPane: true,
              SCRN_CODE: 'SCRNUSERMANAGEMENT',
              moduleCd: 'UserManagement'
            }
          }
        ]
      }
    ]
  }
]
