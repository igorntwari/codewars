export function duplicateCount(text: string): number {
    const charCountMap: { [key: string]: number } = {};
    let result = 0;
  
    for (const char of text.toLowerCase()) {
      if (/[a-z0-9]/.test(char)) {
        if (charCountMap[char] === undefined) {
          charCountMap[char] = 1;
        } else if (charCountMap[char] === 1) {
          result++;
          charCountMap[char] = 2;
        }
      }
    }
  
    return result;
  }