const assertEqual = function(actual, expected, suppressLogging = false) {
  expected = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) // => "noma"

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
