function solution (roman) {
    // complete the solution by transforming the 
    // string roman numeral into an integer
    // we have to declare constants 
    // then we have to  Check if the next symbol has a greater value
    // then we   checks if the current symbol is not the last symbol in the roman string.
    // then we  Skip the next symbol since it has been accounted for
    const romanValues = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
      const currentSymbol = roman[i];
      const currentValue = romanValues[currentSymbol];
  
      
      if (i < roman.length - 1) {
        const nextSymbol = roman[i + 1];
        const nextValue = romanValues[nextSymbol];
        if (nextValue > currentValue) {
          result += nextValue - currentValue;
          i++; 
          continue;
        }
      }
  
      result += currentValue;
    }
  
    return result;
  
  }