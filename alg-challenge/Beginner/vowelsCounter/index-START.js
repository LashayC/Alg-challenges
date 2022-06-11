/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

const { variableDeclaration } = require("@babel/types");

function vowelsCounter(input) {
    let vowelsCount = 0;
    let inputLetters = input.toLowerCase().split("");
    
    const vowels = ["a","e","i","o","u"];
    
    // vowels.forEach(function(vowel) {
    //   inputLetters.forEach(function(inpLetter) {
    //     if (inpLetter === vowel) {
    //       vowelsCount++;
    //     }
    //   });
    // });

    vowels.forEach( vowel => {
      inputLetters.forEach(function(inpLetter) {
        if (inpLetter === vowel) {
          vowelsCount++;
        }
      });
    });

    return vowelsCount;
  }

  /* Paramaters are that I need a an arry and im going need to loop through the input to check how many vowels are inside the array 

Results  I want to return a count of how mnay vowels

Examples if (AEjchsEe) Then I would get a count of 4 vowels

Pseudo Code I would declare the vowels and loop through the inpout while returning the amount of times the array spits out a vowel 

*/





  function getCount(str) {
    let vowelsCount = 0;
  
  // for Each is an add on to the .split('') property, It's a function I can write a conditional into. Ternary?
   str.split('').forEach(function(letters){
  
  // I use the parameter from the forEach function to compare. didn't have to create a variable
    if ( letters === "a" || letters === "e" || letters === "i" || letters === "o" || letters === "u"){
      vowelsCount ++
  }
  });
    return vowelsCount;
  }



  // function getCount(str) {
//   var vowelsCount = 0;
//   var vowels = ["a","e","i","o","u"];
//   for(var i = 0;i < str.length;i++){
//     for(var j=0;j<vowels.length;j++){
//       if(str[i] === vowels[j]){
//         vowelsCount++;
//       }
//     }
//   }
  
//   return vowelsCount;
// }
  

module.exports = vowelsCounter;
