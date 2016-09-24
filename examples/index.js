import Vue from 'vue'
import vcButtonGroup from '../src'
import vcCheckbox from '../../vc-checkbox/src'
import vcRadio from '../../vc-radio/src'
console.log(vcCheckbox, vcRadio)

new Vue({
	el: '#app',
	data () {
		return {
            bools: {
                'true': true,
                'false': false
            },
            checkValue: null,
            radioValue: null,
            buttons: true
		}
	},
    methods: {
        toggleButtonType () {
            this.buttons = !this.buttons
        }
    },
	components: {
        vcButtonGroup,
        vcCheckbox,
        vcRadio
	}
})
