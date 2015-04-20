angular.module('showClientModule').controller('showClientController',['$scope','$http',function($scope,$http){

	$http.get("/consultarClientes").success(function (data) {
   		 $scope.model = data;
	});

}]);


angular.module('showClientModule').controller('showClientSortController',['$scope','$filter','$http',function(scope,$filter,$http){

	$http.get("/consultarClientes").success(function (data) {
   		 scope.model = data;
	});

	scope.getters={
        name: function (value) {
            //this will sort by the length of the first name string
            return value.name.length;
        }
    };

}]);