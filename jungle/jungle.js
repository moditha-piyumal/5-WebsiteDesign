console.log("jungle!");

function firstTrees() {

   for (t=0; t<11; t++) {
   
      document.getElementsByClassName("trees")[t].classList.add("trees1Anim");
   
      
      // document.getElementsByClassName("treesB")[t].classList.add("trees1Anim");
      
      
      document.getElementsByClassName("otherTrees")[t].classList.add("trees2Anim");
   
      
   }
}

// function secondTrees() {

//    for (tt=0; tt<9; tt++) {
   
//       document.getElementsByClassName("otherTrees")[tt].classList.add("trees2Anim");
//    }

// }

firstTrees();
// secondTrees();





// document.getElementsByClassName("trees")[t]