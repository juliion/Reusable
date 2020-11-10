'use strict';

const fn = () => {
  const ob1 = { name: 'Victoria' };
  let ob2 = { name: 'Victor' };
  ob1.name = 'Valeria';
  ob2.name = 'Valera';
  ob2 = { name: 'Viktor/Valera' };
};

module.exports = { fn };
