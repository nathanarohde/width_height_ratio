// Function should take width and height of an image and return a ratio string (ex."16:9").
//If any of width or height entry is 0 function should raise an error.
function calculateRatio(w, h){
  if (w=== 0 || isNaN(w) || h===0 || isNaN(h)) {
    return "Error";
  } else {
    greatestCommonDivisor = findGreatestCommonDivisor(w, h);
    return (w/greatestCommonDivisor).toString() + ":" + (h/greatestCommonDivisor).toString();
  }
}

// The Euclidean Algorithm 
// https://en.wikipedia.org/wiki/Euclidean_algorithm
function findGreatestCommonDivisor(w, h) {
  while (h != 0) {
          var t = h;
          h = w % h;
          w = t;
  }
  return w;
}