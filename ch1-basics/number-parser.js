'use strict';

/**
 *
 * @param {string} numbers
 * @returns {number}
 */
const sum = (numbers) => {
  const [a, b] = numbers.split(',');
  const result = Number.parseInt(a, 10) + Number.parseInt(b, 10);
  return result;
};

module.exports.sum = sum;
