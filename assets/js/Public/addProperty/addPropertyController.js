angular.module('addPropertyModule').controller('addPropertyController', ['$scope', '$http', 'toastr', function($scope, $http, toastr){

	//atributo, compartamento inicial
	$scope.addPropertyForm = {
		loading: false
	}


	$scope.submitAddPropertyForm = function(){
		$scope.addPropertyForm.loading = true;
		$http.post('/adicionarPropriedade', {
			type: $scope.addPropertyForm.type,
			addressStreet: $scope.addPropertyForm.addressStreet,
			owner: $scope.addPropertyForm.owner,
			id: $scope.addPropertyForm.id,
		})
		.then(function onSuccess(sailsResponse){
			console.log("Deu ok");
			window.location = '/property';
			console.log(sailsResponse);
		})
		.catch(function onError(sailsResponse){
			console.log("Deu M...");
			// Handle known error type(s).
			// If using sails-disk adpater -- Handle Duplicate Key
			var idAlreadyInUse = sailsResponse.status == 409;
			if (idAlreadyInUse) {
				toastr.error('That id has already been taken, please try again.', 'Error');
				return;
			}
		})
		.finally(function eitherWay(){
			$scope.addPropertyForm.loading = false;
		})
	}


}]);