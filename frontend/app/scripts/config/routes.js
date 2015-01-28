'use strict';
angular.module('demoApp').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
	function ($stateProvider, $urlRouterProvider, $locationProvider) {


	//Default state
	$urlRouterProvider.otherwise('/');

	//Root state
	$stateProvider
		.state('application', {
			abstract: true,
			templateUrl: '../views/application.html'
		});
	//Auth states
	$stateProvider
		.state('application.user', {
			abstract: true,
			url: '/user',
			templateUrl: '../views/application/user.html'
		})
			.state('application.user.show', {
				url: '/all',
				templateUrl: '../views/application/users/show.html',
				controller: 'ShowUserController',
				controllerAs: 'ShowUserCtrl'
			});
}])