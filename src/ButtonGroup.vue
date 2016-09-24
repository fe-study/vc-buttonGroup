<template>
    <!-- thanks for https://github.com/yuche/vue-strap/blob/master/src/buttonGroup.vue -->
    <div class="vc-button-group-component" :class="{ 'btn-group': buttons, 'groups': group }" :data-toggle=" buttons && 'buttons' ">
        <slot></slot>
    </div>
</template>

<style>
.vc-button-group-component {
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
}
.groups {
    .vc-radio-component:first-of-type .btn,
    .vc-checkbox-component:first-of-type .btn {
        border-radius: 3px 0 0 3px;

        &:focus {
            outline: none;
        }
    }
    .vc-radio-component:last-of-type .btn,
    .vc-checkbox-component:last-of-type .btn {
        border-radius: 0 3px 3px 0;

        &:focus {
            outline: none;
        }
    }
    & .focus {
        outline: none!important;
    }
}
</style>

<script>
export default {
    name: 'vc-buttonGroup',
    props: {
        value: null,
        buttons: {
            type: Boolean,
            default: true
        },
        group: {
            type: Boolean,
            default: true
        },
        type: {
            type: String,
            default: 'default'
        }
    },
    created () {
        this._btnGroup = true
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
    }
}
</script>
