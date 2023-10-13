function solution(number){
    let ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
         tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
         hundreds = [ "", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
         thousands = ["", "M", "MM", "MMM"];
     return thousands[Math.floor(number / 1000)] +
            hundreds[Math.floor((number % 1000) / 100)] +
            tens[Math.floor((number % 100) / 10)] +
            ones[number % 10];
   }