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

const findKeyByValue = function(obj, values){

  for(let value of values){
    
    if (value === values){
      return value.key;
    }
    else{
      return undefined;
    }
  }

}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);