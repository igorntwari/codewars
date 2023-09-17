function solve(s) {
    const n = s.length;
    let count = 0;
    
    for (let i = 0; i < n; i++) {
      if (parseInt(s[i]) % 2 !== 0) {
        count += (i + 1);
      }
    }
  
    return count;
  }