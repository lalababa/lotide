// A custom assert function with emoji icons
// jshint esversion: 6


const assertEqual = function(actual, expected, suppressLogging = false) {
  if (actual === expected) {
    if (!suppressLogging) {
      console.log(`✅  Assertion Passed: ${actual} === ${expected}`);
    }
    return true;
  } else {
    if (!suppressLogging) {
      console.log(`🛑  Assertion Failed: ${actual} !== ${expected}`);
    }
    return false;
  }
};


module.exports = assertEqual;

const countLetters = function(str){
  const result = {};
  for (let letter of str){
    //check if there`s letter already counted
    if (!result[letter]){
      //if not existed, create one
      result[letter] = 1;
    }else{
      result[letter]++;
    }
  }
  return result;
}

console.log(countLetters("lighthouse in the house"));