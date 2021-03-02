exports.min = function min (array) {
  if (arguments.length === 0 || !Array.isArray(array) || array.length == 0){
    return 0;
  }
  let minValue = array[0];
  for (let value of array){
    if (value < minValue){
      minValue = value;
    }
  }
  return minValue;
}

exports.max = function max (array) {
  if (arguments.length === 0 || !Array.isArray(array) || array.length == 0){
    return 0;
  }
  let maxValue = array[0];
  for (let value of array){
    if (value > maxValue){
      maxValue = value;
    }
  }
  return maxValue;
}

exports.avg = function avg (array) {
  if (arguments.length === 0 || !Array.isArray(array) || array.length == 0){
    return 0;
  }
  let sum = 0;
  for (let value of array){
    sum += value;
  }
  return sum/array.length;
}
