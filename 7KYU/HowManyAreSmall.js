function smaller(nums) {
    const result = [];
  
    for (let i = 0; i < nums.length; i++) {
      let count = 0;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < nums[i]) {
          count++;
        }
      }
      result.push(count);
    }
  
    return result;
  }