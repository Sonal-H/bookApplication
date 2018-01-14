/**
 * *********app.js file**********
 * 
 * Purpose : It Loads module and dependencies of application
 * 
 */
var bookMania = angular.module('bookMania', ['ngResource','ngRoute','ui.grid','ui.grid.selection']);

//Route for the application
bookMania.config(['$routeProvider',function($routeProvider) {
		$routeProvider
		//Route for the Landing Page
		.when('/home', {
			templateUrl : 'partials/app/home.html',
			controller  : 'HomeCtrl'
		})
		//Route for the non existing page  
		.otherwise({
                redirectTo : '/home'
            }
		);
}]);