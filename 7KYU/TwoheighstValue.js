function twoHighest(arr) {
    const uniqueValue = [...new Set(arr)]
     uniqueValue.sort((a, b) => b - a);
    return uniqueValue.slice(0,2)
  }