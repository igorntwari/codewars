function whatCentury(year) {
    if (typeof year === 'string') {
      if (year.slice(-2) === '00') {
        return year.slice(0, 2) + ends(year.slice(0, 2));
      } else {
        return (Math.floor(+year / 100) + 1).toString() + ends((Math.floor(+year / 100) + 1).toString());
      }
    } else if (typeof year === 'number') {
      return Math.floor((year - 1) / 100) + 1 + ends((Math.floor((year - 1) / 100) + 1).toString());
    } else {
      return undefined;
    }
  }
  
  function ends(century) {
    const lastNumber = century.slice(-1);
    const lastTwoNumbers = century.slice(-2);
  
    if (lastTwoNumbers >= '11' && lastTwoNumbers<= '13') {
      return 'th';
    } else {
      switch (lastNumber) {
        case '1':
          return 'st';
        case '2':
          return 'nd';
        case '3':
          return 'rd';
        default:
          return 'th';
      }
    }
  }