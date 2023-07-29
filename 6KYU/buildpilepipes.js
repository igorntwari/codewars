function findNb(m) {
    // your code
  let sum = 0;
  let n = 0;
  while (sum < m) {
    n++;
    sum += Math.pow(n, 3);
  }
  return sum === m ? n : -1;
}