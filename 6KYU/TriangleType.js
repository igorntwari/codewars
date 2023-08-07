function triangleType(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      return 0; 
    }
  
    let angleA = Math.acos((b * b + c * c - a * a) / (2 * b * c));
    let angleB = Math.acos((a * a + c * c - b * b) / (2 * a * c));
    let angleC = Math.acos((a * a + b * b - c * c) / (2 * a * b));
  
    if (angleA < Math.PI / 2 && angleB < Math.PI / 2 && angleC < Math.PI / 2) {
      return 1;
    } else if (angleA === Math.PI / 2 || angleB === Math.PI / 2 || angleC === Math.PI / 2) {
      return 2;
    } else {
      return 3; 
    }
  }