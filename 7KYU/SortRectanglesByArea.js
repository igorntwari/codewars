function sortByArea(array) {
    const compareByArea = (a, b) => {
      const areaA = calculateArea(a);
      const areaB = calculateArea(b);
      return areaA - areaB;
    };
    const calculateArea = (element) => {
      if (Array.isArray(element)) {
        return element[0] * element[1];
      } else {
        return Math.PI * Math.pow(element, 2);
      }
    };
    const sortedArray = [...array];
    sortedArray.sort(compareByArea);
    return sortedArray;
  }