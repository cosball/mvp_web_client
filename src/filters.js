import filters from '@/modules/Common/filters'

export default {
     install(Vue) {
        for (let key in filters) {
            if (filters.hasOwnProperty(key)) {
                Vue.filter(key, filters[key])
            }
        }
     }
}
