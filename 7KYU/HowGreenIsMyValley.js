function makeValley (arr) {
    arr.sort(function(a, b) { return b - a; });
    const left = [];
    const right = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 == 0) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return left.concat(right.reverse());
  }