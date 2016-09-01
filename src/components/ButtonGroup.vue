<template>
    <!-- thanks for https://github.com/yuche/vue-strap/blob/master/src/buttonGroup.vue -->
    <div :class="{ 'btn-group': buttons }" :data-toggle=" buttons && 'buttons' ">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        value: null,
        buttons: {
            type: Boolean,
            default: true
        },
        type: {
            type: String,
            default: 'default'
        }
    },
    watch: {
        value: {
        deep: true,
        handler (val) {
            this.$children.forEach((el) => {
                if (el.group && el.eval) el.eval()
            })
        }
        }
    },
    created () {
        this._btnGroup = true
    }
}
</script>
