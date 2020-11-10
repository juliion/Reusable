'use strict';

const phonebook = [{ name: 'Julia', phone: '+380987653125' },
  { name: 'MyCat', phone: '+380980156346' },
  { name: 'DiCaprio', phone: '+229895544369' }];

const findPhoneByName = name => {
  for (const per of phonebook) {
    if (per.name === name) return per.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
