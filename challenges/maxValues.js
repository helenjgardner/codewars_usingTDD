// looks for all subarrays of length k
// returns array of max values for all subarrays

let maxValues = (arr, k) =>{
    let result=[];
    for (let i=0; i<=(arr.length-k);i++){
     let tempArr=arr.slice(i,i+k);
     result.push(Math.max(...tempArr));
    }
    return result;
  }
  
module.exports=maxValues;