const maxValues=require("../challenges/maxValues");

describe("Max Values",()=>{
    test("returns max values",()=>{
        expect(maxValues( [10, 5, 2, 7, 8, 7] ,4)).toEqual([10,8,8])
    })
    test("returns max values",()=>{
        expect(maxValues( [10, 5, 2, 7, 8, 7] ,3)).toEqual([10,7,8,8])
    })
});