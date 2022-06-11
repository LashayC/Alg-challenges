/* 
 Given an array and a chunk size, 
 divide the array into many sub-arrays where 
 each sub-array has the specified length. E.g

chunkArray([1, 2, 3, 4, 5, 11, 12, 13],6, 7, 8, 9, 10,  5)

should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]
*/

function chunkArray(array, size) {
console.log('size:', size)

    let fullArray = []

    while(array.length > 0){
      fullArray.push(array.slice(0, size))
      array.splice(0, size)

      console.log(fullArray)
    }
    return fullArray
    // console.log(fullArray.push(array.splice(0, 5)))
    // console.log(fullArray)
}

module.exports = chunkArray

//([1,2,3,5,5], 2) // [[1,2], [3,5], [5]]


    //create empty array to push new ones into
    //loop to create my sub arrays, while loop because i want it go until whenever.
    //slice slice off my subarray, then push it to the general array.
    //splice to fully remove whatever I just sliced so that array the array shrinks. 
    //array.length as it's reduced the splice method, when at 0, loop ends. 

