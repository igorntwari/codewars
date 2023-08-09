function topThreeWords(text) {
    const wordMap = new Map();
    const regex = /[a-z]+'?[a-z]*/gi;
  
    const words = text.match(regex) || [];
  
    words.forEach((word) => {
      const lowercaseWord = word.toLowerCase();
      wordMap.set(lowercaseWord, (wordMap.get(lowercaseWord) || 0) + 1);
    });
  
    const sortedWords = Array.from(wordMap.entries()).sort(
      (a, b) => b[1] - a[1]
    );
  
    const topThreeWords = sortedWords.slice(0, 3).map((entry) => entry[0]);
  
    return topThreeWords;
  }