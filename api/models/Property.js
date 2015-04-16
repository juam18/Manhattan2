/**
* Property.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

	    // Tipo do imóvel
	    // e.g. 1-casa, 2-apartamento, etc
	    type: {
	      type: 'int',
	      required: true
	    },

	    // Av. ou rua do endereço
	    // e.g. rua duqye de caxias
	    addressStreet: {
	      type: 'string',
	      required: true
	    },

	    // Proprietario
	    // e.g. nikola
	    owner: {
	      type: 'string',
	      required: true
	    },

	    // Código
	    // e.g. 00123
	    id: {
	      type: 'int',
	      required: true,
	      unique: true
	    },

  }
};

