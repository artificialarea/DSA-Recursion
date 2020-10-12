// per: https://youtu.be/VrrnjYgDBEk?t=572

// The Collatz conjecture
// the number of steps it takes to get back to 1

let collatz = (n) => {
    // base case
    if (n == 1)
        return 0;
    // two recursive cases
    // even numbers
    else if ((n % 2) == 0)
        return 1 + collatz(n/2);
    // odd numbers
    else 
        return 1 + collatz(3*n + 1);
}

console.log(collatz(8));