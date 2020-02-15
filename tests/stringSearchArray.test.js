const stringSearchArray=require("../challenges/stringSearchArray");

describe("stringSearchArray",()=>{
    test("returns [] when no result found",()=>{
        const result=stringSearchArray('dfe',['deer','deal','die']);
      expect(result).toEqual([])
    })
    test("returns complete array of 1 when that element matches",()=>{
        expect(stringSearchArray('de',['deer'])).toEqual(['deer'])
    })
    test("returns complete array of > 1 when all elements match", ()=>{
        expect(stringSearchArray('de',['deer','deal'])).toEqual(['deer','deal'])
    })
    test("returns correct result when finds 1 element ", ()=>{
        expect(stringSearchArray('de',['deer','dale'])).toEqual(['deer'])
    })
    test("returns correct result when finds 2 element ", ()=>{
        expect(stringSearchArray('de',['deer','dale','reader'])).toEqual(['deer','reader'])
    })
})