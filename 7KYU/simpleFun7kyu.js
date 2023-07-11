function evilCodeMedal(userTime, gold, silver, bronze) {
   return userTime < gold ? "Gold" 
         : userTime < silver ? "Silver" 
         : userTime < bronze ? "Bronze" 
         : "None";
}