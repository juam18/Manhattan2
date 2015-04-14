/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	addConversation: function (req,res) {
		
		//Pega todos parametros vindos da requisicao
		var dataDoCliente = req.params.all();

		//Se a requisiçao é Socket 
		//e se é POST, queremos adicionar 
		if(req.isSocket && req.method === 'POST'){

			// This is the message from connected client
			// So add new conversation
			Chat.create(dataDoCliente)
				.exec(function(error,dataDoCliente){
					console.log(dataDoCliente);
					Chat.publishCreate({id: dataDoCliente.id, message : dataDoCliente.message , user:dataDoCliente.user});
				}); 
		}
		// Se a requisiçao é Socket, mas NÃO é POST
		// entao queremos inscrever um usuário para 'escutar' mudanças no modelo
		else if(req.isSocket){
			// subscribe client to model changes 
			Chat.watch(req.socket);
			console.log( 'Usuário inscrito para ' + req.socket.id );
		}
	}
};

