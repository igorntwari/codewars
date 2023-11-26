const repeats = arr => arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num)).reduce((acc, curr) => acc + curr, 0);
