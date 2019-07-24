// do not import through index, will cause circular dependency
import LayoutContainer from '@/modules/Common/components/_LayoutContainer/LayoutContainer.vue'
import RowItem from '@/modules/Common/components/_RowItem/RowItem.vue'

import {
	RouteService
} from '@/modules/Common/services'

export default {
	name: 'menu-pane',
	components: {
		LayoutContainer,
		RowItem
	},
	data() {
		return {
		}
	},
	methods: {
		navigateTo(item) {
			RouteService.push({
				name: item.routeName
			})
		}
	},
	computed: {
	},
	props: {
		/**
		 * Item format
		 * {
		 *      iconPath: String,   // path to icon image
		 *      label: String,      // menu label for display
		 *      routeName: String   // name of the route
		 * }
		 */
		items: {
			type: Array,
			default() {
				return []
			}
		}
	}
}
