export function getMiddle(s:string) {
    // return the middle charater(s)
   let full = s.length;
    if (full % 2 != 0) 
    {
      let start = (full - 1) / 2;
      return s.slice(start, start + 1)
    } 
    else 
    {
      let start = full / 2 - 1;
      return s.slice(start, start + 2);
    }
  }