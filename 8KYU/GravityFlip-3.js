const flip = (d, a) => {
    const sortedArray = [...a];
  
    if (d === 'R') {
      return sortedArray.sort((a, b) => a - b); 
    } else if (d === 'L') {
      return sortedArray.sort((a, b) => b - a);
    }
  };