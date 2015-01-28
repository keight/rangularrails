'use strict';
angular.module('demoApp')
	.config(['RestangularProvider', '$httpProvider', function(RestangularProvider, $httpProvider){
		RestangularProvider.setBaseUrl('api/v1');
	}]);