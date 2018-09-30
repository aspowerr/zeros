module.exports = function getZerosCount(number) {
  // your implementation
  
  let sum=0;
  
  if(number>5) { 
    let _5 = Math.trunc(number/5); 
    sum+=_5;
  }

  if(number>Math.pow(5,2)) { 
    let _5_2 = Math.trunc(number/Math.pow(5,2)); 
    sum+=_5_2;
  }

  if(number>Math.pow(5,3)) { 
    let _5_3 = Math.trunc(number/Math.pow(5,3)); 
    sum+=_5_3;
  }

  if(number>Math.pow(5,4)) { 
    let _5_4 = Math.trunc(number/Math.pow(5,4)); 
    sum+=_5_4;
  }

  if(number>Math.pow(5,5)) { 
    let _5_5 = Math.trunc(number/Math.pow(5,5)); 
    sum+=_5_5;
  }

  if(number>Math.pow(5,6)) { 
    let _5_6 = Math.trunc(number/Math.pow(5,6)); 
    sum+=_5_6;
  }

  if(number>Math.pow(5,7)) { 
    let _5_7 = Math.trunc(number/Math.pow(5,7)); 
    sum+=_5_7;
  }

  if(number>Math.pow(5,8)) { 
    let _5_8 = Math.trunc(number/Math.pow(5,8)); 
    sum+=_5_8;
  }

  if(number>Math.pow(5,9)) { 
    let _5_9 = Math.trunc(number/Math.pow(5,9)); 
    sum+=_5_9;
  }

  if(number>Math.pow(5,10)) { 
    let _5_10 = Math.trunc(number/Math.pow(5,10)); 
    sum+=_5_10;
  }

  if(number>Math.pow(5,11)) { 
    let _5_11 = Math.trunc(number/Math.pow(5,11)); 
    sum+=_5_11;
  }

  return sum;
}
