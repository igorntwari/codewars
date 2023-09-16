function rgb(r, g, b) {
    let result =''
    if(r < 0) {
      result +='00'
    } else if (r > 255) {
      result = 'FF'
    } else {
      result = r.toString(16).padStart(2,'0') +
              g.toString(16).padStart(2,'0') +
              b.toString(16).padStart(2,'0');
    }
      return result   
   }
  