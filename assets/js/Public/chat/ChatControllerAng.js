var socketApp = angular.module('ChatModuleAng').controller('ChatControllerAng',['$http','$log','$scope',function($http,$log,$scope){
	

			$scope.predicate = '-id';
			$scope.reverse = false;
			$scope.baseUrl = 'http://localhost:1337';
			$scope.chatList =[];
			$scope.getAllchat = function(){

				io.socket.get('/chat/addConversation');

				$http.get($scope.baseUrl+'/chat')
					 .success(function(success_data){

					 		$scope.chatList = success_data;
					 		$log.info(success_data);
					 });
			};

			$scope.getAllchat();
			$scope.chatUser = "nikkyBot"
			$scope.chatMessage="";

			io.socket.on('chat',function(obj){

				if(obj.verb === 'created'){
					$log.info(obj)
					$scope.chatList.push(obj.data);
					$scope.$digest();
				}

			});

			$scope.sendMsg = function(){
				$log.info($scope.chatMessage);
				io.socket.post('/chat/addConversation/',{user:$scope.chatUser,message: $scope.chatMessage});
				$scope.chatMessage = "";
			};


}]);