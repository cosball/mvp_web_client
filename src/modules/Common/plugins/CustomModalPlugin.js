/**
 *  Custom Modal Plugins
 *  Ways to use:
 *
 *  import { CustomModalPlugin } from '@common/plugins';
 *  Vue.use(CustomModalPlugin)
 *      or
 *  Vue.use(CustomModalPlugin, {height: 'auto', width: '50%', pivotY:0.5}) < (optional options)
 *
 *  Ways to use in JS:
 *  ** it is same as this.$modal.
 *  1. if dont need to override any default setting:
 *        this.$customModal(modalName, {propsForModal})
 *  2. if need to have custom setting, eg: clickToClose
 *        this.$customModal(modalName, {propsForModal}, {clickToClose: false, height: '500px'})
 *
 */

import { EventBusService } from '@/modules/Common/services'

const Plugin = {
    install(Vue, options = {}) {
        if (this.installed) { return }

        this.installed = true

        let defaultOptions = {
            height: 'auto',
            width: '35%',
            pivotY: 0.15
        }
        Vue.prototype.$customModal = {
            show(modal, paramsOrProps, params, events = {}) {
                EventBusService.$emit('CLOSE_MODAL')

                /** CombinedParams
                 *  - merge the objects.
                 *   params will overwrite options and defaultOptions, options will overwrite defaultOptions
                 */

                 setTimeout(() => {
                    let combinedParams = {...defaultOptions, ...options, ...params}
                    Vue.prototype.$modal.show(modal, paramsOrProps, combinedParams, events)
                 }, 100)
            },
            hide: Vue.prototype.$modal.hide,
            toggle: Vue.prototype.$modal.toggle
        }
   }
}

export default Plugin
