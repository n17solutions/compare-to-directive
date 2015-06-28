'use strict';

var angular = require('angular');

try {
  angular.module('n17-validators');
} catch {
  angular.module('n17-validators', []);
}

require('./directives');
