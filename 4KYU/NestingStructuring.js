Array.prototype.sameStructureAs = function (other) {
    function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
    }
    function compareStructure(arr1, arr2) {
      if (!isArray(arr1) || !isArray(arr2)) return isArray(arr1) === isArray(arr2);
      if (arr1.length !== arr2.length) return false;
      for (let i = 0; i < arr1.length; i++) {
        if (!compareStructure(arr1[i], arr2[i])) return false;
      }
      return true;
    }
    return compareStructure(this, other);
  };