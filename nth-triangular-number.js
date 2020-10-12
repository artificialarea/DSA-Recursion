const nthTriNum = (n) => {    //nth Equliateral Triangular Number

    if (n === 1) return n;

    return nthTriNum(n - 1) + n;
};

console.log(nthTriNum(200));




/*

// What is the input to the program?
The number of dots composing the nth triangular number

// What is the output of the program?
The number of objects that cna form an equilateral triangle

// What is the input to each recursive call?
something n+1

// What is the output of each recursive call?
n + n+1

// e.g.
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

Pattern: n+1
1,       1
3,      +2  n+1
6,      +3  n+1
10,     +4  n+1
15,     +5
21, 
28, 
36, 
45.

*/