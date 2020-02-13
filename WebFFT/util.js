function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function map(val, inMin, inMax, outMin, outMax) {
  var p = (val - inMin) / (inMax - inMin);
  var v = outMin + (p * (outMax - outMin));
  return v;
}

function updateQueue(newVal, vals, maxVals) {
  vals.push(newVal)
  if (vals.length > maxVals) {
    vals.shift()
  }
}

function getMin(vals) {
  var min = Number.MAX_SAFE_INTEGER
  for(var i = 0; i < vals.length; i++) {
    if (vals[i] < min)
      min = vals[i]
  }
  return min
}

function getMax(vals) {
  var max = -1 * Number.MAX_SAFE_INTEGER
  for(var i = 0; i < vals.length; i++) {
    if (vals[i] > max)
      max = vals[i]
  }
  return max
}

function lerp(value, target, pct)
{
  var diff = target - value
  return value + diff * pct
}