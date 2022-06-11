/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/

function factorial(n, memo) {
    memo = memo || {}
    if (memo[n]){
        return memo[n]
    }  
    if (n === 0) {
        return 1
    }
    return memo[n] = n * factorial(n - 1, memo)

// || logical or if first is true use that if sec true use that.. if memo isn't defined, lets define it now as empty object
// falsy is everything '', null, -0, undefind, 0, false
// n is number property in the object
// memo[n] is accessing the property 
// if true execute return memo[n]


// O P T I O N 2

function factorial(n) {
   let x = 1
   for ( let i = 1; i <= n; i++){
       x*=i
    // x = x * i // i goes up i++
   }
   return x
}
}

module.exports = factorial

// declare variable for x
 // x* = i 1x 1, 1x 2, 2x 3, 6x 4 (increases and each answer is reassigned)
// x reassigned everytime
// x times i