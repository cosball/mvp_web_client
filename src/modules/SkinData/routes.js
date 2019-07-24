import {
	SkinData
} from './views'

import {
	BaseView
} from '@/modules/Common/views'

export default [
  {
    path: '//',
    name: 'SkinDataBase',
    redirect: '/SkinData',
    component: BaseView,
    children: [
      {
        path: '/',
				redirect: 'SkinData',
				name: 'SkinDataParent',
        component: {
          render(c) {
            return c('router-view')
          }
        },
        children: [
          {
						path: 'SkinData',
						component: SkinData,
						name: 'SkinData',
            meta: {
							screenName: 'SkinData',
							showHeader: true,
							showMenuPane: true,
              SCRN_CODE: 'SCRNSKINDATA',
              moduleCd: 'SkinData'
            }
          }
        ]
      }
    ]
  }
]
