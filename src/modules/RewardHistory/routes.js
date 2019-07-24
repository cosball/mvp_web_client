import {
	RewardHistory
} from './views'

import {
	BaseView
} from '@/modules/Common/views'

export default [
  {
    path: '//',
    name: 'RewardHistoryBase',
    redirect: '/RewardHistory',
    component: BaseView,
    children: [
      {
        path: '/',
				redirect: 'RewardHistory',
				name: 'RewardHistoryParent',
        component: {
          render(c) {
            return c('router-view')
          }
        },
        children: [
          {
						path: 'RewardHistory',
						component: RewardHistory,
						name: 'RewardHistory',
            meta: {
							screenName: 'RewardHistory',
							showHeader: true,
							showMenuPane: true,
              SCRN_CODE: 'SCRNREWARDHISTORY',
              moduleCd: 'RewardHistory'
            }
          }
        ]
      }
    ]
  }
]
