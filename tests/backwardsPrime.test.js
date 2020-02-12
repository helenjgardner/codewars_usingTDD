// require takes a path to a file
const backwardsPrime = require("../challenges/backwardsPrime");


// backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97]
//  backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967]
//  backwardsPrime(501, 599) => []

describe("backwardsPrime", ()=>{
  test("returns empty array when no b primes exist", ()=>{
      const result=backwardsPrime(501,599);
      expect(result).toEqual([])
  })

  test("returns array when passed 2 and 100 - 1st provided test case", ()=>{
    const result=backwardsPrime(12,100);
    expect(result).toEqual([13, 17, 31, 37, 71, 73, 79, 97])
  })

  test("returns array when passed 9900, 10000 - 2nd provided test case", ()=>{
    const result=backwardsPrime(9900, 10000);
    expect(result).toEqual([9923, 9931, 9941, 9967])
  })
});