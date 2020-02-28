
let arrayIntersect = (a, b)=>{
    let result=null;
    a.forEach(p_item =>{
      b.forEach(s_item => {if (p_item === s_item) result=p_item})
          });
    return result;
  }

  module.exports=arrayIntersect;