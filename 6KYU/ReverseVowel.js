function reverseVowels(str) {
    const voels = /[aieouAIEOU]/; 
    let reversed = ''; 
    for (let letter of str) {
      if (voels.test(letter)) {
        reversed += letter; 
      }
    }
    reversed = reversed.split('').reverse().join('');
    let result = ''; 
    let vowelIndex = 0;
    for (let i = 0; i < str.length; i++) {
      if (voels.test(str[i])) {
        result += reversed[vowelIndex];
        vowelIndex++;
      } else {
        result += str[i];
      }
    }
  
    return result;
  }