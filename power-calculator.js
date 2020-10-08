let powerCalculator = (intBase, intExponent) => {
    // validation
    if (intExponent < 0)
        return `exponent should be a positive number, greater than or equal to zero`
    
    // non-recursive solution, simply... so why is this a case for recursion?
    // return Math.pow(intBase, intExponent);

    // recursive approach...
    // base case 
    if (intExponent === 0) 
        return intBase;
    // recursive case
    return intBase * powerCalculator(intBase, intExponent - 1);

};

console.log(powerCalculator(2,8));


/*
// What is the input to the program?
Two integers: a base and an exponent

// What is the output of the program?
Math.pow(intBase, intExponent)... but for whatever reason instead as a recursive algorithm instead.
intExponent must be a postive integer too.

// What is the input to each recursive call?
fn(intBase, intExponent - 1)

// What is the output of each recursive call?
intBase * fn(intBase, intExponent - 1)

// e.g.
input: powerCalculator(10, 2); 
output: 100 

input: powerCalculator(10, -2); 
output: 'exponent should be >= 0'

*/

