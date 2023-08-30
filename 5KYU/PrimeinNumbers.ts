export const primeFactors = (n: number): string => {
    let result = "";
    let divisor = 2;
  
    while (n > 1) {
      let exponent = 0;
      while (n % divisor === 0) {
        n /= divisor;
        exponent++;
      }
  
      if (exponent > 0) {
        if (result !== "") {
          result += ")";
        }
        result += `(${divisor}`;
        if (exponent > 1) {
          result += `**${exponent}`;
        }
      }
  
      divisor++;
    }
  
    return result + (result !== "" ? ")" : "");
  };