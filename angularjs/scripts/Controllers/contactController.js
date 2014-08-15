angular

	.module('YSF.Controllers',[])

	.controller('ContactsController', function($scope) {
	
		/*$scope.contacts = JSON.parse(localStorage["contacts"]);*/
			$scope.contacts = JSON.parse(localStorage["contacts"]);

		    
		    /*$scope.contacts = [
		    	{name: 'Yusuf', age: 35, phone: '123456'}, 
		    	{name: 'Gina', age: 27, phone: '654321'},
		    	{name: 'Pebbles', age: 28, phone: '987654'}];
			*/
			
			$scope.saveContact = function(){
				//console.log($scope.newContact); return;
				$scope.contacts.push($scope.newContact);
				$scope.$apply;
				localStorage["contacts"] = JSON.stringify(angular.copy($scope.contacts));
				$scope.newContact = '';
				console.log($scope.contacts);
			}
			
			
			$scope.updateContact = function(contact){
				$scope.contacts.$save(id);
			}


			$scope.editContact = function(contact){
				$scope.newContact = contact;
			}	
			
			
			$scope.removeContact = function(contact){
				$scope.delete = confirm('Do you want to delete ' + contact.name + '?');

				if(!$scope.delete) {return;}

				$scope.contacts.splice( $scope.contacts.indexOf(contact), 1 );
				$scope.$apply;
				localStorage["contacts"] = JSON.stringify(angular.copy($scope.contacts));
			}

 });