'use strict';

const range = (start, end) => {
  const array = [];
  let current = start;
  while (current <= end) {
    array.push(current);
    current++;
  }
  return array;
};

module.exports = { range };
