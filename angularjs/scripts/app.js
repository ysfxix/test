angular

	.module('app', ['ngRoute', 'YSF.Controllers', 'YSF.Directives'])

	.config(function($routeProvider, $locationProvider){

		$routeProvider
		
			.when('/',
				{
					controller: 'HomeController',
					templateUrl: 'views/home.html'
				})
				
			.when('/about',
				{
					controller: 'AboutController',
					templateUrl: 'views/about.html'				
				})
				
			.when('/contacts',
				{
					controller: 'ContactsController',
					templateUrl: 'views/contact.html'
				})

			.when('/feedback',
				{					
					templateUrl: 'views/feedback.html'
				})
				
				
			.otherwise({ redirectTo: '/' });
			
			//$locationProvider.html5Mode(true);
	});




