function yesNo(arr) {
    const newArr = [];
    let inPutIndex = 0;
    let outPutIndex = 1;
    const length = arr.length;
  
    for (let i = 0; i < length; i++) {
      newArr.push(arr[inPutIndex]);
      arr.splice(inPutIndex, 1);
      inPutIndex = (inPutIndex + outPutIndex) % arr.length;
    }
  
    return newArr;
  }