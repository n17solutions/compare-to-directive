(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else if(typeof exports === 'object')
		exports["n17compare"] = factory(require("angular"));
	else
		root["n17compare"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);
	var app = angular.module('n17-validators', []);

	__webpack_require__(2);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var app = angular.module('n17-validators');

	app.directive('compareTo', ['$parse', __webpack_require__(3)]);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function($parse) {
		return {
			require: '?ngModel',
			restrict: 'A',
			link: function(scope, elem, attrs, ctrl) {
				function getCompareValue() {
					var match = getter(scope);

					if (angular.isObject(match) && match.hasOwnProperty('$viewValue')) {
						match = match.$viewValue;
					}

					return match;
				}

				if (!ctrl) {
					if (console && console.warn) {
						console.warn('Compare Validator requires ngModel to be on the scoped element.');
					}

					return;
				}

				var getter = $parse(attrs.compareTo);
				var caseInsensitiveGetter = $parse(attrs.compareToCaseInsensitive);

				ctrl.$validators.compareTo = function() {
					var match = getCompareValue();

					if (caseInsensitiveGetter(scope) && angular.isString(match) && angular.isString(ctrl.$viewValue)) {
						return ctrl.$viewValue.toLowerCase() === match.toLowerCase();
					}

					return ctrl.$viewValue === match || match === '';
				};

				scope.$watch(getCompareValue, function() {
					ctrl.$$parseAndValidate();
				});
			}
			
		};	
	};

/***/ }
/******/ ])
});
;