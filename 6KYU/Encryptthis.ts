export const encryptThis = (str: string): string => {
    // Your code goes here
    // contain string 
    // first letter must be converted to ASCII CODE
    // the second letter must switched with the last latter 
    // theres is no special charcter
  return str
      .split(' ')
      .map(elemt => {
        if (elemt.length === 1) return elemt.charCodeAt(0);
        if (elemt.length === 2) return `${elemt[0].charCodeAt(0)}${elemt[1]}`;
        if (elemt.length === 3) return `${elemt[0].charCodeAt(0)}${elemt.slice(-1)}${elemt[1]}`;
        if (elemt.length > 3) return `${elemt[0].charCodeAt(0)}${elemt.slice(-1)}${elemt.slice(2, -1)}${elemt[1]}`;
      })
      .join(' ');
  }