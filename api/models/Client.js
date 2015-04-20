/**
* Client.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	// Código
	    // e.g. 00123
	    idPessoa: {
	      type: 'int',
	      required: true,
	      unique: true
	    },

	    // Cliente Nome
	    // e.g. nikola
	    name: {
	      type: 'string',
	      required: true
	    },

	    // Cliente Sobrenome
	    // e.g. nikola
	    surname: {
	      type: 'string',
	      required: true
	    },

	    // Data Nascimento
	    // 10081992 = 10/09/1992
	    birth: {
	      type: 'int',
	      required: true
	    },

	    // Av. ou rua do endereço
	    // e.g. rua duqye de caxias
	    addressStreet: {
	      type: 'string',
	      required: true
	    },

	    // Nacionalidade
	    // brasileiro
	    nationality: {
	      type: 'string',
	      required: true
	    },

	    // Naturalidade
	    // Porto Alegre
	    nationalityCity: {
	      type: 'string',
	      required: true
	    },

	    // Estado
	    // RS
	    nationalityState: {
	      type: 'string',
	      required: true	     
	    },

	     // RG
	    // 9056499990
	    rg: {
	      type: 'int',
	      required: true	     
	    },

	     // CPF
	    // 76418315067
	    cpf: {
	      type: 'int',
	      required: true	     
	    }

  }
};

