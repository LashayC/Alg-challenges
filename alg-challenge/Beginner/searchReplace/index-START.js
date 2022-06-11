
// searching through a string to find all matches
// and do a find and replace
// with indexof( ) and replace( )
// without using Regular Expressions

  let paragraph = 'Lorem wealth ipsum dolor sit ame wealth onsectetur adipisicing elit. Vitae wealth suscipit optio ab soluta illo wealth numquam at, eos qui similique oluptates sapiente quis quisquam libero, dicta neque wealth consequuntur. Asperiores, temporibus';

let log = console.log;
let find = 'wealth',
    replace = 'love'

  while( paragraph.indexOf(find) != -1 ){
    paragraph = paragraph.replace(find, replace);
  }

  console.log(paragraph)

  // module.exports = paragraph 


// .indexOf give you the indoxOf what you darclared in a variable

// let find = ' ';, let replace =''; allow you to use ' ' and replace with '' from replace variable

// .replace creates a new paragraph.. You'll have to assign a varible to use the new paragraph
 
// using .find() and .replace(), with an if statment only search for one. using a while loop continues to search the variable. 

// you have to know how many time you are looping through with a for loop.. With a while loop it will only go as long as it is != -1

//.concat() allows you to combine an arr, while making a new array






// ANOTHER WAY TO SOLVE THE CHALLENCE - below searchs for spaces and replace them with nospace. also I'm creating a new paragraph with .concat()

// let paragraph = 'Lorem ipsum dolor sit ame onsectetur adipisicing elit. Vitae suscipit optio ab soluta illo numquam at, eos qui similique oluptates sapiente quis quisquam libero, dicta neque consequuntur. Asperiores, temporibus';

// let log = console.log;
// let find = ' ',
//     replace ='',
//     newParagraph = ''.concat(paragraph) // this is creating a new variable.. this is extra.. I could just use paragraph in the while loop..

//   while( newParagraph.indexOf(find) != -1 ){
//     newParagraph = newParagraph.replace(find, replace);
//   }
//   console.log(newParagraph)