/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/


function whereIBelong(arr, num) {
   let assorted = arr.sort()
   for(let i = 0; i < assorted.length; i++){
    if(num <= arr[i]){
      return i
    }
   }return assorted.length
 }

 // why are we returning two returns?

module.exports = whereIBelong