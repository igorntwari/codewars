function wave(str){
    // Code here
   const wave = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[a-z]/i)) {
        wave.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
      }
    }
    return wave;
  }