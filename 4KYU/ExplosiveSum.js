function sum(num) {
    const ways = new Array(num + 1).fill(0);
    ways[0] = 1;
  
    for (let i = 1; i <= num; i++) {
      for (let j = i; j <= num; j++) {
        ways[j] += ways[j - i];
      }
    }
  
    return ways[num];
  }