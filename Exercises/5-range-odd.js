'use strict';

const rangeOdd = (start, end) => {
  const array = [];
  let current = start;
  if (start % 2 === 0) current++;
  while (current <= end) {
    array.push(current);
    current += 2;
  } 
  return array;
};

module.exports = { rangeOdd };
