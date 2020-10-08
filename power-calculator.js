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


// e.g.
// powerCalculator(10, 2); // ==> 100 
// powerCalculator(10, -2); // ==> 'exponent should be >= 0'