/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

function isAnagram(stringA, stringB) {
    let eachWord1 = stringA.split('').sort().join('').toLowerCase()
    let eachWord2 = stringB.split('').sort().join('').toLowerCase()
    
    console.log('eachWord1:', eachWord1,
    'eachWord2:', eachWord2)

    if(eachWord1 === eachWord2){
        return true
    }else{
        return false
    }
}

module.exports = isAnagram