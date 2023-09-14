function rootSum(n) {
    let sum = 0;
  
    for (let i = 1; i <= n; i++) {
      let root = Math.pow(n, 1 / i);
  
      if (Number.isInteger(root)) {
        sum += root;
      }
    }
  
    return sum;
  }
  
  console.log(rootSum(1));   // 1
  console.log(rootSum(9));   // 12
  console.log(rootSum(27));  // 30
  console.log(rootSum(64));  // 78
  