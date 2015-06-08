'use strict';

var app = angular.module('n17-validators');

app.directive('compareTo', ['$parse', require('./compareto')]);