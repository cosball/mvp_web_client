export default {
    name: 'row-item',
    data() {
        return {
        }
    },
    props: {
        wrapperClass: {
            type: String,
            default: ''
        },
        contentLeftClass: {
            type: String,
            default: ''
        },
        contentMainClass: {
            type: String,
            default: ''
        },
        contentRightClass: {
            type: String,
            default: ''
        }
    },
    computed: {
        hasContentLeft() {
            return Boolean(this.$slots.contentLeft)
        },
        hasContentRight() {
            return Boolean(this.$slots.contentRight)
        }
    }
}
