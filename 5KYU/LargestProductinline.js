function greatestProduct(input) {
    let maxProduct = 0;
    
    for (let i = 0; i <= input.length - 5; i++) {
      const digits = input.slice(i, i + 5).split('').map(Number);
      const product = digits.reduce((acc, num) => acc * num, 1);
      maxProduct = Math.max(maxProduct, product);
    }
    
    return maxProduct;
  }
  