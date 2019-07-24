import {
	TRANSITION
} from '@/modules/Common/constants'

const defaultState = {
	routeTransition: TRANSITION.FADE,
	accessToken: '',
	isAuthenticated: false,
	userId: '',
	prevRouteName: null,
	isBaseRouteChange: true,
	leftPaneMenu: [{
		icon: 'list-alt',
		label: 'Skin Data',
		routeName: 'SkinData',
		accessible: ['Super', 'Admin', 'User']
	}, {
		icon: 'list-alt',
		label: 'Reward History',
		routeName: 'RewardHistory',
		accessible: ['Super', 'Admin', 'User']
	}, {
		icon: 'user-cog',
		label: 'User Management',
		routeName: 'userManagement',
		accessible: ['Super', 'Admin']
	}],
	isMenuPaneActive: false,
	isHeaderPaneActive: false,
	isBaseLoaderActive: false,
	appAuthorityList: [],
	institutionsList: [],
	roleList: [],
	roles: [{
		text: 'Admin',
		value: 'Admin'
	}, {
		text: 'User',
		value: 'User'
	}],
	cryptoCurrencyList: [],
	addSkinDataLimit: 0,
	upSkinDataLimit: 0
}

export default defaultState
