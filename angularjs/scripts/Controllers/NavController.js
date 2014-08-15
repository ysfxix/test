var app = angular.module('app');

app.controller('NavController', function($scope) {

	$scope.NavMenu = [
						{menuItemName:'Home', menuItemLink: '/'}, 
						{menuItemName:'About Us', menuItemLink: '#/about'}, 
						{menuItemName:'Contacts', menuItemLink: '#/contacts'},
						{menuItemName:'Feedback', menuItemLink: '#/feedback'}
					];
 });