'use strict';

angular.module('demoApp')
	.controller('ShowUserController', ['$scope', 'Restangular', function($scope, Restangular){
		Restangular.one('users').get().then(
			function(users){
				$scope.users = users.users;
			})
	}]);