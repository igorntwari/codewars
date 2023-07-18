var nbrOfLaps = function (x, y) {
    //   console.log(x)
    //   console.log(y)
        let numberOfLaps = x;
        while (numberOfLaps % y !== 0) {
         numberOfLaps+=x
     }
      return [numberOfLaps/x,numberOfLaps/y];
    }