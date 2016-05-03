var curry = require("curry");

function filter(func, object) {
  var result = (object instanceof Array) ? [] : {};

  for (var i in object) {
    if (func(object[i], i)) {
      if (result instanceof Array) {
        result.push(object[i]);
      } else {
        result[i] = object[i];
      }
    }
  }

  return result;
}

module.exports = curry(filter);
