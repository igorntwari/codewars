String.prototype.toJadenCase = function () {
 
    const words = this.split(" ");
    
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    
     return words.join(" ");
  };
  const quote = "how can mirrors be real if our eyes aren't real";
  const jadenCaseQuote = quote.toJadenCase();
  console.log(jadenCaseQuote);