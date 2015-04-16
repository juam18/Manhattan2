/**
 * PropertyController
 *
 * @description :: Server-side logic for managing properties
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	/** Loga com conta de usuario **/
	insert: function(req,res){
	
		//cria um User com os parametros enviados através do form sign-up --> signup.ejs
		Property.create({
			type: req.param('type'),
			addressStreet: req.param('addressStreet'),
			owner: req.param('owner'),
			id: req.param('id')
		}, function propertyCreated(err, newProperty){
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
				id: newProperty.id
			});
		});
	},
			
	findAll: function (req, res) {
	    Property.findAll().done(function (err, users) {
	      console.log(users); 
	    });
	  },

	findByOwner: function(req, res) {
	    var name = req.param('owner');
	    Property.findByOwner(name).done(function (err, users) {
	      if (err) {
	        res.send(400);
	      } else {
	        res.send(users);
	      }
	    });
  	}	
	
};

