function powerOf4(n) {
    if (!(Number.isInteger(n))) return false;
    while (n > 1) {
      if (n%4 != 0) return false;
      else n = n/4;
    }
    return n == 1 ? true : false;
  }