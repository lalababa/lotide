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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (object1.getKey===object2.getKey){
    console.log("true");
    return true;
  }
    console.log("false");
    return false;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false