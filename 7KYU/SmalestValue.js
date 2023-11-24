function min(arr, toReturn) {
    const minValue = Math.min(...arr);
    return toReturn === 'value' ? minValue : arr.indexOf(minValue);
  }
  