import actions from './_actions'
import getters from './_getters'
import mutations from './_mutations'
// default module state
import state from './_state'

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
