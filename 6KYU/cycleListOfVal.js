function cycle(dir, arr, cur) {
    const currentIndex = arr.indexOf(cur);
    if (currentIndex === -1) return null;
    let nextIndex;
    if (dir === 1) {
      nextIndex = (currentIndex + 1) % arr.length;
    } else if (dir === -1) {
      nextIndex = (currentIndex - 1 + arr.length) % arr.length;
    } else {
      return null;
    }
    return arr[nextIndex];
  }