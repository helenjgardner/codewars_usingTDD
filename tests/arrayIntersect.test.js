const arrayIntersect=require("../challenges/arrayIntersect");

describe("arrayIntersect",()=>{
    test("returns intersect of two arrays",()=>{
        expect(arrayIntersect( ['a','c','bob','lucy'],['b','bob','d'])).toBe('bob')
    })
})

