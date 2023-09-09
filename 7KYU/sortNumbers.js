function solution(nums) {
    return !nums || nums.length === 0 ? []: nums.sort((a, b) => a - b);
   }