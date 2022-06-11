/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/

//prep:
//return: to return a list of numbers but fizz when the number is a multiple of 3, buzz when its a multiple of 5, and fizzbuzz when it is both a multple of fizzbuzz
//example:
//psuedo code: 1)use a loop to check through the numbers 2)use a conditional to see if this certain thing is true to return. 3) use modulus to see if there are left overs. If not than it is a multiple. 4) return the string of fizz, buzz, or fizzbuzz to the console log.

function fizzBuzz(n) {
    for(let i = 1; i <= n ; i++){
        if(i % 3 === 0 && i % 5 === 0){
             console.log('fizzbuzz');
        }
        else if(i % 5 === 0){
            console.log('buzz');
        }
        else if(i % 3 === 0){
            console.log('fizz');
        }
        else console.log(i);
    }
}

module.exports = fizzBuzz

// must organize the contionals so that multi conditions run first and then single conditions. You want the conditionals to continue to check the next in this case.