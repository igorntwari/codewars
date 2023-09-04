function toWeirdCase(string) {
    let words = string.split(' '); 
    let result = [];
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let single = '';
      for (let j = 0; j < word.length; j++) {
        if (j % 2 === 0) {
          single += word[j].toUpperCase(); 
        } else {
       single += word[j].toLowerCase(); 
         }
      }
  
      result.push(single);
    }
  
     return result.join(' '); 
  }