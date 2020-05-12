// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  if (json[0] === '"' && json[json.length - 1] === '"') {
    return json;
  }
  if (json[0] === '[' && json[json.length - 1] === ']') {
    if (json.length === 2) {
      return [];
    }
    const result = [];
    json = json.slice(1, json.length - 1);
    let elements = json.split(',');
    let i = 0;
    while (i < elements.length) {
      result.push(parseJSON(elements[i]));
      i++;
    }
    return result;
  }
  if (json[0] === '{' && json[json.length - 1] === '}') {
    if (json.length === 2) {
      return {};
    }
    const result = {};
    json = json.slice(1, json.length - 1);
    let keysValues = json.split(',');
    let j = 0;
    while (j < keysValues.length) {
      let keyValuePair = keysValues[j].split(':');
      result[parseJSON(keyValuePair[0])] = parseJSON(keyValuePair[1]);
      j++;
    }
    return result;
  }
  if (json === 'true') {
    return true;
  }
  if (json === 'false') {
    return false;
  }
  if (json === 'null') {
    return null;
  }
  if (!isNaN(Number(json))) {
    return Number(json);
  }
};
