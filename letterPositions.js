// Takes in two arrays and returns true or false, based on a perfect match.
// jshint esversion : 6
//const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  if (!(array1 instanceof Array) || !(array2 instanceof Array) || (array1.length !== array2.length)) {
    return false;
  } else {
    let index = array1.length;
    while (index > 0) {
      index --;
      if (array1[index] instanceof Array || array2[index] instanceof Array) {
        if (!eqArrays(array1[index], array2[index])) {
          return false;
        }
      } else if (array1[index] !== array2[index]) {
        return false;
      }
    }
    return true;
  }
};


module.exports = eqArrays;

//const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;




const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  return results;
};

assertArraysEqual("hell");
