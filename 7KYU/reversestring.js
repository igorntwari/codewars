function reverseMessage(str) {
    let lowerCase = str.toLowerCase().split('').reverse().join('')
  return  lowerCase = lowerCase.replace(/^[a-z]|(?<= )[a-z]/g,(char)=> char.toUpperCase())
    
  
  }