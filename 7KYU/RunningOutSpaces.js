function spacey(array){
    let result = [];
    let space = '';
    for (let word of array) {
      space += word
      result.push(space)
    }
      return result;
    }