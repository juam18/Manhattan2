angular.module('addClientModule').controller('addClientController', ['$scope', '$http', 'toastr', function($scope, $http, toastr){

	//atributo, compartamento inicial
	$scope.addClientForm = {
		loading: false
	}


	$scope.submitAddClientForm = function(){
		$scope.addClientForm.loading = true;
		$http.post('/adicionarCliente', {
			//name: "junior"
			name: $scope.addClientForm.name,
			surname: $scope.addClientForm.surname,
			birth: $scope.addClientForm.birth,
			addressStreet: $scope.addClientForm.addressStreet,
			nationality: $scope.addClientForm.nationality,
			nationalityCity: $scope.addClientForm.nationalityCity,
			nationalityState: $scope.addClientForm.nationalityState,
			rg: $scope.addClientForm.rg,
			cpf: $scope.addClientForm.cpf,
			idPessoa: $scope.addClientForm.idPessoa
		})
		.then(function onSuccess(sailsResponse){
			console.log("Deu ok");
			window.location = '/mostrarClientesConsultados';
			console.log(sailsResponse);
		})
		.catch(function onError(sailsResponse){
			console.log("Deu M...");
			console.log(sailsResponse);
			// Handle known error type(s).
			// If using sails-disk adpater -- Handle Duplicate Key
			var idAlreadyInUse = sailsResponse.status == 409;
			if (idAlreadyInUse) {
				toastr.error('That id has already been taken, please try again.', 'Error');
				return;
			}
		})
		.finally(function eitherWay(){
			$scope.addClientForm.loading = false;
		})
	}


}]);