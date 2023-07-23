function dirReduc(arr){
    // ...
    const opposites = {
      "NORTH": "SOUTH",
      "SOUTH": "NORTH",
      "WEST": "EAST",
      "EAST": "WEST"
    };
    const result = [];
    for (const direction of arr) {
      if (result.length && result[result.length - 1] === opposites[direction]) {
        result.pop();
      } else {
        result.push(direction);
      }
    }
    return result;
  }