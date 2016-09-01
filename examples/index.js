import Vue from 'vue'
import vcButtonGroup from '../dist/build.js'
import vcCheckbox from 'vc-checkbox/src/components/Checkbox'

new Vue({
	el: '#app',
	data () {
		return {
            bools: {
                'true': true,
                'false': false
            },
            value: null,
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
        vcCheckbox
	}
})
