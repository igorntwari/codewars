function createTwoSetsOfEqualSum(n) {
    if (n < 3 || n % 4 === 1 || n % 4 === 2) {
      return [];
    }
  
    let set1 = [];
    let set2 = [];
  
    let sum1 = 0;
    let sum2 = 0;
  
    for (let i = n; i >= 1; i--) {
      if (sum1 <= sum2) {
        set1.push(i);
        sum1 += i;
      } else {
        set2.push(i);
        sum2 += i;
      }
    }
  
    if (sum1 === sum2) {
      return [set1, set2];
    }
  
    return [];
  }