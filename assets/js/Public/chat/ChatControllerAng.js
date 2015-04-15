var socketApp = angular.module('ChatModuleAng').controller('ChatControllerAng',['$http','$log','$scope',function($http,$log,$scope){
	
			//http://maangalabs.com/blog/2014/12/04/socket-in-sails/

			$scope.predicate = '-id';
			$scope.reverse = false;
			$scope.baseUrl = 'http://localhost:1337';
			$scope.chatList =[];
			$scope.getAllchat = function(){

				io.socket.get('/chat/addConversation'); //INICIA CONEXÃO COM SOCKET

				/* Recuperando o histórico do chat */
				$http.get($scope.baseUrl+'/chat') // '/chat' é uma API criada internamento comw Sails. 
												  //  Ele nao irá funcionar quando for para o modo produção,
												  // teremos que criar nossa própria API para recuperar o historico do chat.

					 .success(function(success_data){
							$scope.chatList = success_data;
					 		$log.info(success_data);
					 });
			};

			$scope.getAllchat();
			$scope.chatUser = "nikkyBot"
			$scope.chatMessage="";

			// Começa a escutar os eventos o que o servidor Sails manda, com a específica eventIdentity, 
			//  irá engatilhar a função de callback fornecida quando um evento igual é recebido.
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