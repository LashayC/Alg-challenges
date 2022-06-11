/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

// function capSentence(text) {
  
//   const capitalizeString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

//   const capitalizeWords = (str) => str.split(' ').map(capitalizeString).join(' ');

//   console.log("capitalizeWordsD: " + capitalizeWords(text))
//   return capitalizeWords(text)
// }

function capSentence(text) {
  const capText = text[0].toUpperCase() 
  + text.slice(1).toLowercase

  const words = text.split(' ').map(capText)

  const capSentence = words.join(' ')

  return capSentence 
}

module.exports = capSentence







