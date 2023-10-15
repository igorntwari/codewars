const flip=(d, a)=>{
    if(d == 'R') {
     const right = a.sort((a,b)=> a-b)
    return right
    } else if (d == 'L') {
      const left = a.sort((a,b)=> b-a)
    return left
    }
    return
  }