(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vcButton"] = factory();
	else
		root["vcButton"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3)

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(2)
if (false) {
(function () {
var hotAPI = require("vue-hot-reload-api")
hotAPI.install(require("vue"))
if (!hotAPI.compatible) return
var id = "-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./ButtonGroup.vue"
hotAPI.createRecord(id, module.exports)
module.hot.accept(["-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./ButtonGroup.vue","-!vue-html-loader!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./ButtonGroup.vue"], function () {
var newOptions = require("-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./ButtonGroup.vue")
if (newOptions && newOptions.__esModule) newOptions = newOptions.default
var newTemplate = require("-!vue-html-loader!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./ButtonGroup.vue")
hotAPI.update(id, newOptions, newTemplate)
})
})()
}

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = "<!-- thanks for https://github.com/yuche/vue-strap/blob/master/src/buttonGroup.vue -->\n    <div :class=\"{ 'btn-group': buttons }\" :data-toggle=\" buttons && 'buttons' \">\n        <slot></slot>\n    </div>";

/***/ },
/* 3 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// <template>
//     <!-- thanks for https://github.com/yuche/vue-strap/blob/master/src/buttonGroup.vue -->
//     <div :class="{ 'btn-group': buttons }" :data-toggle=" buttons && 'buttons' ">
//         <slot></slot>
//     </div>
// </template>

// <script>
exports.default = {
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
            handler: function handler(val) {
                this.$children.forEach(function (el) {
                    if (el.group && el.eval) el.eval();
                });
            }
        }
    },
    created: function created() {
        this._btnGroup = true;
    }
};
// </script>

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _ButtonGroup = __webpack_require__(1);

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _ButtonGroup2.default;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=build.js.map