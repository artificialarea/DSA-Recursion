let countingSheep = (num) => {
    // base case
    if (num === 0) {
        return 'All sheep jumped over the fence';
    }
    // recursive case
    let result = `${num}: Another sheep jumps over the fence\n`;
    return result + countingSheep(num - 1);
};

console.log(countingSheep(3));

/*
What is the input to the program?
Input is a number.


What is the output of the program?
Sould display a countdown sequence of a number with a corresponding string.


What is the input to each recursive call?
Number - 1.


What is the output of each recursive call?
Number + string. Base case when reaches 0, then display just a string.

*/