/**
* Chat.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  		// USER
		// defines which user sends the message
		user:{
			type:'string',
			required:true
		},

		// MESSAGE
		// defines the message send
  		message:{
  			type:'string',
  			required:true
  		}
  	}
};

