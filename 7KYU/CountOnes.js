function hammingWeight(x){
    // ...
  let binary = [];
  let Ones = []  ;
    while (x>0)
     {
  binary = (x%2) + binary;
      x = Math.floor(x/2);
       }
     for (let codes of binary) {
       if (codes == 1) {
         Ones.push(codes)
       }
     }
    return Ones.length;
  }