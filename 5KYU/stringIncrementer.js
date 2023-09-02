function incrementString(strng) {
    if (isNaN(parseInt(strng.slice(-1)))) {
      return strng + "1";
    } else {
      let num = strng.match(/\d+$/)[0];
      let incrementedNum = String(parseInt(num) + 1).padStart(num.length, "0");
      return strng.replace(/\d+$/, incrementedNum);
    }
  }