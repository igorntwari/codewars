function twoSum(numbers, target) {
    // we have two numbers that can be added together and give the target
    // we have to add  numbers in array first
    // then return the numbers that give out the target
  //   console.log(numbers)
  //   console.log(target)
    
     let num1 = 0;
     let num2 = 0;
    for (let i = 0; i < numbers.length ; i++) {
      for (let j = i + 1; j < numbers.length ; j++) {
        if (numbers[i] + numbers[j] === target) {
          num1 = i;
          num2 = j;
        } 
      }
    }
   return [num1,num2]
  }