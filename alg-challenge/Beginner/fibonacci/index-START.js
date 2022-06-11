/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/

function fibonacci(n) {
    let prevNum = 0
    let currentNum = 1
    let fib = 0
    let i = 0

    while(i < n){
    i++
    
    fib = prevNum + currentNum
    prevNum = currentNum
    currentNum = fib

    console.log('prevNum:', prevNum, 'currentNum:', currentNum, 'fib:', fib)
    }
    return fib
}

module.exports = fibonacci