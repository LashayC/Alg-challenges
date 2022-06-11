/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    let originalWord = text,
    flipWord = originalWord.split('').reverse().join('')

    console.log(originalWord)
    console.log(flipWord)
    
    if(originalWord === flipWord){
        return true
    }
}



module.exports = palindromeChecker;