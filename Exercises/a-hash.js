'use strict';

const phonebook = { Julia: '+380987653125', MyCat: '+380980156346', 
  DiCaprio: '+229895544369' };

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
