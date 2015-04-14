var socketApp = angular.module('socketApp').controller('ChatController',['$http','$log','$scope',function($http,$log,$scope){
	

			$scope.getAllchat = function(){

				io.socket.get('/chat/addConversation');

				$http.get($scope.baseUrl+'/chat')
					 .success(function(success_data){

					 		$scope.chatList = success_data;
					 		$log.info(success_data);
					 });
			};


			io.socket.on('chat',function(obj){
				//Check whether the verb is created or not
				if(obj.verb === 'created'){
					$log.info(obj)
					$scope.chatList.push(obj.data);
					// Add the data to current chatList
					// Call $scope.$digest to make the changes in UI
					$scope.$digest();
				}
			});

			
			$scope.sendMsg = function(){
				$log.info($scope.chatMessage);
				io.socket.post('/chat/addConversation/',{user:$scope.chatUser,message: $scope.chatMessage});
				$scope.chatMessage = "";
			};


}]);