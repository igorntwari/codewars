// we have to have to make sure that our function accepts masked numbers
// then create an new array to store number divisile by 6
// then we have to loop through number between 0 and 9 
// then we replace each number by *
// then later store our resurt
// then we have to solt our result and return it 
//  we have to create new function to help our "isDivisibleBy6" function
//This function will accepts number as input and checks if it's divisible by 6.
//It initializes a variable sum to keep track of the sum of the digits.
// later After calculating the sum of the digits, it checks if the sum is divisible by 3

function isDivisibleBy6(s) {
    let outCome = [];
    for (let i = 0; i <= 9; i++) {
      let number = s.replace('*', i);
      if (isDivisibleBy6Helper(number)) {
        outCome.push(number);
      }
    }
    return outCome.sort();
  }
  
  function isDivisibleBy6Helper(number) {
    let sum = 0;
    for (let digit of number) {
      sum += parseInt(digit);
    }
    return sum % 3 === 0 && parseInt(number[number.length - 1]) % 2 === 0;
  }
  
  