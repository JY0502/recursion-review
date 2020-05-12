// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = [];

  if (obj === undefined) {
    return "undefined";
  }

  //number, boolean, null
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
      return '' + obj;
  }

  //array
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result.join(',') + ']';
  }

  //object
  if (typeof obj === 'object') {

    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
      } else {
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + result.join(',') + '}';
  }

  //string
  if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  }
};
