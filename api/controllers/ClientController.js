/**
 * ClientController
 *
 * @description :: Server-side logic for managing Clients
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


	insert: function(req,res){
	
		//cria um Cliente com os parametros enviados através do form sign-up --> signup.ejs
		Client.create({
			idPessoa: req.param('idPessoa'),
			name: req.param('name'),
			surname: req.param('surname'),
			birth: req.param('birth'),
			addressStreet: req.param('addressStreet'),
			nationality: req.param('nationality'),
			nationalityCity: req.param('nationalityCity'),
			nationalityState: req.param('nationalityState'),
			rg: req.param('rg'),
			cpf: req.param('cpf')
		}, function ClienCreated(err, newClient){
			if (err){
				console.log ("err: ", err);
				console.log ("err.invalidAttributes: ", err.invalidAttributes);
				// If this is a uniqueness error about the email attribute,
                // send back an easily parseable status code.
                if (err.invalidAttributes && err.invalidAttributes.Id 
                  && err.invalidAttributes.Id.rule === 'unique') {
                  return res.idInUse();
                }

                // Otherwise, send back something reasonable as our error response.
                return res.negotiate(err);
				}
			return res.json({
				idPessoa: newClient.idPessoa
			});
		});
	},
			
	findAll: function (req, res) {
		Client.find().exec(function(err, data){ //.exec() é uma funçao do Waterline
		  if (err) {
		    return console.log(err);
		  } else {
		      return res.json(data); //O QUE É RETORNADO POR MODEL.FIND() NAO ESTA EM JSON! TRANSFORMARREMOS
		  }
		});
	  },

	findByClient: function(req, res) {
	    var name = req.param('name');
	    Client.findByClient(name).exec(function (err, users) {
	      if (err) {
	        return res.send(400);
	      } else {
	        return res.send(users);
	      }
	    });
  	}	
	
	
};

