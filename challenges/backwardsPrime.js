// Find all Backwards Read Primes between two positive given numbers (both 
// inclusive), the second one always being greater than or equal to the 
// first one. The resulting array or the resulting string will be 
// ordered following the natural order of the prime numbers.

// Backwards Read Primes are primes that when read backwards in base 10 
// (from right to left) are a different prime. (This rules out primes 
//  which are palindromes.)

function backwardsPrime(start, stop) {
  const isItPrime = n => {
    let result = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        result = false
      }
    }
    return result;
  };
  let retArr=[];
  for (j=start; j<(stop);j++){
    let rev=Number(j.toString().split("").reverse().join(""));
    if (isItPrime(j) && j != rev && isItPrime(rev)) retArr.push(j);
  }
  return retArr;
}

module.exports = backwardsPrime;