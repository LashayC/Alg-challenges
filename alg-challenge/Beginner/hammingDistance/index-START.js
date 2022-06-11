/* CHALLENGE
Given two strings of equal length, 
calculate and return the 
hamming distance.

E.g hammingDistance('rover', 'river') // should return 1
*/

function hammingDistance(stringA, stringB) {
    let distance = 0
    if ( stringA.length !== stringB.length) {
        return 0
    }
    for (let i = 0; i < stringB.length; i++) {
        if(stringA[i] !== stringB[i] ){
            distance += 1
        }
    } 
    return distance
}


module.exports = hammingDistance