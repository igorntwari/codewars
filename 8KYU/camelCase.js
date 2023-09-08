function sameCase(a, b) {
    if (!(/[a-zA-Z]/.test(a)) || !(/[a-zA-Z]/.test(b))) {
      return -1;
    }
  
    if ((a === a.toLowerCase() && b === b.toLowerCase()) ||
        (a === a.toUpperCase() && b === b.toUpperCase())) {
      return 1;
    }
  
    return 0;
  }