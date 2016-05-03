var curry = require("curry");

function filter(func, object) {
  var result = (object instanceof Array) ? [] : {};

  for (var i in object) {
    if (func(object[i], i)) {
      result[i] = object[i]
    }
  }

  return result;
}

module.exports = curry(filter);
