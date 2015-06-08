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

				return ctrl.$viewValue === match;
			};

			scope.$watch(getCompareValue, function() {
				ctrl.$$parseAndValidate();
			});
		}
		
	};	
};