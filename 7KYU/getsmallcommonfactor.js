function scf(array) {
    // Function to generate prime factors for a number
    const primeFactors = num => {
      const factors = [];
      for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
          factors.push(i);
          num /= i;
        }
      }
      return factors;
    };
  
    let factors = primeFactors(array[0]);
  
    for (let i = 1; i < array.length; i++) {
      const currFactors = primeFactors(array[i]);
      factors = factors.filter(factor => {
        const index = currFactors.indexOf(factor);
        if (index !== -1) {
          currFactors.splice(index, 1);
          return true;
        }
        return false;
      });
    }
  
    return factors.length > 0 ? Math.min(...factors) : 1;
  }
  