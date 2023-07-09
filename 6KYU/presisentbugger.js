function persistence(num) {
    //code me
   let count = 0;
  while (num.toString().length > 1) {
     let product = 1;
     for(let digit of num.toString()) {
       product *= parseInt(digit);
     }
     num = product;
     count++;
   }
   return count;
 }