angular.module('showPropertyModule').controller('showPropertyController',['$scope','$http',function($scope,$http){

	$http.get("/consultarPropriedades").success(function (data) {
   		 $scope.model = data;
	});

}]);