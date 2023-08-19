export const high = (str: string): string => {
  const words = str.split(' '); 

  let highestScore = 0;
  let highestScoreWord = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let wordScore = 0;

    for (let j = 0; j < word.length; j++) {
      wordScore += word.charCodeAt(j) - 'a'.charCodeAt(0) + 1;
    }
    if (wordScore > highestScore) {
      highestScore = wordScore;
      highestScoreWord = word;
    }
  }

  return highestScoreWord;
}