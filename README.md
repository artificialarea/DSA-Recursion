# Recursion exercises

Data Structures & Algorithms, per: https://courses.thinkful.com/dsa-v1/checkpoint/2#assignment

To run any of these scripts, in terminal command line enter: `node script-name.js`

### Tips and resources

For each of these exercises, without using any code, you are expected to identify the following:

* What is the input to the program?
* What is the output of the program?
* What is the input to each recursive call?
* What is the output of each recursive call?

Start each problem by understanding the problem and coming up with some sample input and output. In some of the drills we have provided sample inputs and outputs for your convenience.

## 00. sumOf

**`sumOf.js`**

```
const sumOf = (list) => {
    // base case
    if (list.length === 1) 
        return list[0];
    // general recursive case
    return list[0] + sumOf(list.slice(1));
}

let lst = [2, 4, 6, 8, 10];
console.log(sumOf(lst));
```

## 1. Counting Sheep

**`counting-sheep.js`**
```
let countingSheep = (num) => {
    if (num === 0) {
        return 'All sheep jumped over the fence';
    }
    let result = `${num}: Another sheep jumps over the fence\n`;
    
    return result + countingSheep(num - 1);
};

countingSheep(3);
```

## 2. Power Calculator

**`power-calculator.js`**
```
let powerCalculator = (intBase, intExponent) => {
    if (intExponent < 0)
        return `exponent should be a positive number, greater than or equal to zero`

    if (intExponent === 0) 
        return intBase;

    return intBase * powerCalculator(intBase, intExponent - 1);
};

powerCalculator(2,8);
```




## Asides 

**`funfun.js`** countdown and making a tree, per: [Fun Fun Function video](https://www.youtube.com/watch?v=k7-N8R0-KY4&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=7)

**`collatz.js`** Ooooh, the Collatz conjecture ;P per: [Recursion Intro by Harvard CS50](https://youtu.be/VrrnjYgDBEk?t=572)