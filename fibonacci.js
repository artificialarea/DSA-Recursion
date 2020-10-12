const fibonacci = (n) => { // index of the nth Fibonacci number
    if (n < 2) return n;
    // console.log(fibonacci(n-1) + fibonacci(n - 2))  // this will cause terminal to crash if `n` is large
    return fibonacci(n-1) + fibonacci(n - 2);
};

console.log(fibonacci(10)); 

// O(2^n) Exponential Time Complexity.
// Beyond the 40th Fibonacci number we are getting into BigInt territory 
// and thus JS unable to compute quickly, if at all


// fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, ...