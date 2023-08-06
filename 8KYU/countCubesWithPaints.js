function countSquares(cuts){
    // store the number of cuts created 
    // then check the number of cubes which have red face 
    // return the total number of cuts by removed the one which are red 
    //console.log(cuts);
    
    if (cuts ===0) {
      return 1;
    } else {
      
    
     const cutsMade = Math.pow(cuts + 1, 3);
     const redCubes = Math.pow(cuts -1, 3) ;
    return cutsMade - redCubes;
  }
    }