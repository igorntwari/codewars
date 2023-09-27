
function nextSmaller(n) {
    const nArray = n.toString().split("");
    const length = nArray.length;
    let pivotIndex = -1;
    for (let i = length - 2; i >= 0; i--) {
      if (nArray[i] > nArray[i + 1]) {
        pivotIndex = i;
        break;
      }
    }
  
    if (pivotIndex === -1) {
      return -1;
    }
    let rightmostSmallerIndex = -1;
    for (let i = length - 1; i > pivotIndex; i--) {
      if (nArray[i] < nArray[pivotIndex]) {
        rightmostSmallerIndex = i;
        break;
      }
    }
    [nArray[pivotIndex], nArray[rightmostSmallerIndex]] = [nArray[rightmostSmallerIndex], nArray[pivotIndex]];
  
    if (nArray[0] === '0') {
      return -1;
    }
    const reversed = nArray.splice(pivotIndex + 1).reverse();
    const resultArray = nArray.concat(reversed);
    const result = parseInt(resultArray.join(""), 10);
  
    return result;
  }
  