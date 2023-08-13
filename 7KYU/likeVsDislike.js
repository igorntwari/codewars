// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
    let state = Nothing;
     for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
       
       if (button === "Like")  {
         if (state === "Like") {
           state = "Nothing";
         } else {
           state = "Like";
           }
         } else if (button === "Dislike" ) {
           if (state === "Dislike"){
             state = "Nothing";
           } else {
             state = "Dislike";
           }
         }
       } 
       
       return state;
  }