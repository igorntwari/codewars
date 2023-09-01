function calculatePower(str) {
    const charToPower = (char) => char.charCodeAt(0) - 64;
    return str.split('').reduce((total, char) => total + charToPower(char), 0);
  }
  
  function battle(x, y) {
    const powerX = calculatePower(x);
    const powerY = calculatePower(y);
  
    if (powerX > powerY) {
      return x;
    } else if (powerX < powerY) {
      return y;
    } else {
      return "Tie!";
    }
  }
  