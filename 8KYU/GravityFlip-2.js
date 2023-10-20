const flip = (d, a) => {
    if (d === 'R') return a.sort((a, b) => a - b); 
    if (d === 'L') return a.sort((a, b) => b - a);
  };