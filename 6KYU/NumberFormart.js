var numberFormat = function (number) {
    //Your code here
       // return number.toLocaleString() 
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };