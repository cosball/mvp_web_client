export default {
    SET_ROUTE_TRANSITION: (state, transition) => {
      state.routeTransition = transition
    },
    SET_LEFT_PANE_MENU: (state, menu) => {
      state.leftPaneMenu = menu
    },
    SHOW_MENU_PANE: (state, isActive) => {
      state.isMenuPaneActive = isActive
    },
    SHOW_HEADER_PANE: (state, isActive) => {
      state.isHeaderPaneActive = isActive
    },
    SET_PREV_ROUTE_NAME: (state, route) => {
      state.prevRouteName = route
    },
    IS_BASE_ROUTE_CHANGE: (state, isChange) => {
      state.isBaseRouteChange = isChange
    },
    SHOW_BASE_LOADER: (state, isActive) => {
      state.isBaseLoaderActive = isActive
    },
    SET_ROLE_LIST: (state, roleList) => {
      state.roleList = roleList
    },
    SET_CRYPTO_CURRENCY_LIST: (state, cryptoCurrencyList) => {
      state.cryptoCurrencyList = cryptoCurrencyList
    },
    SET_ACCESS_TOKEN(state, token) {
      state.accessToken = token
    },
    SET_IS_AUTHENTICATED(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    },
    SET_USER_ID(state, userId) {
      state.userId = userId
    },
    SET_DEFAULT_ADD_SKINDATA(state, addSkinDataLimit) {
      state.addSkinDataLimit = addSkinDataLimit
    },
    SET_DEFAULT_UPLOAD_SKINDATA(state, upSkinDataLimit) {
      state.upSkinDataLimit = upSkinDataLimit
    },
    SET_ROUTE_LEAVE_GUARD_ACTIVE: (state, active) => {
      state.isRouteLeaveGuardActive = active
    }
}
