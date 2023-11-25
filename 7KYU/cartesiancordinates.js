function coordinates(degrees, radius) {
    const radians = (degrees * Math.PI) / 180; 
    const x = Math.round(radius * Math.cos(radians) * 1e10) / 1e10; 
    const y = Math.round(radius * Math.sin(radians) * 1e10) / 1e10;
    return [x, y];
  }
  