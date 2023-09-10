let circleArea = function(radius) {
    if (radius <= 0 || typeof radius === 'string') {
      return false;
    } else {
      let area = (Math.PI * Math.pow(radius, 2)).toFixed(2);
      return parseFloat(area);
    }
  };