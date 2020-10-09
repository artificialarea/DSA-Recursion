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


<br />

## 00. sumOf

**`sumOf.js`**

```js
const sumOf = (list) => {
    // base case
    if (list.length === 1) 
        return list[0];
    // general recursive case
    return list[0] + sumOf(list.slice(1));
}

let lst = [2, 4, 6, 8, 10];
console.log(sumOf(lst));
// 30
```


<br />

## 1. Counting Sheep

**`counting-sheep.js`**

```js
let countingSheep = (num) => {
    if (num === 0) {
        return 'All sheep jumped over the fence';
    }
    let result = `${num}: Another sheep jumps over the fence\n`;
    
    return result + countingSheep(num - 1);
};

countingSheep(3);
// 3: Another sheep jumps over the fence
// 2: Another sheep jumps over the fence
// 1: Another sheep jumps over the fence
// All sheep jumped over the fence
```


<br />

## 2. Power Calculator

**`power-calculator.js`**

```js
let powerCalculator = (intBase, intExponent) => {
    if (intExponent < 0)
        return `exponent should be a positive number, greater than or equal to zero`

    if (intExponent === 0) 
        return intBase;

    return intBase * powerCalculator(intBase, intExponent - 1);
};

powerCalculator(2,8);
// 512
powerCalculator(2,-8);
// `exponent should be a positive number, greater than or equal to zero`
```


<br />

## 3. Reverse String

**`reverse-string.js`** _see comments in file re: 'backward phase of recursion'..._

```js
const reverseString = (str) => {
    if (str.length === 1) return str;

    // Split first char and the remaining chars of string
    const firstChar = str.charAt(0);
    const restStr = str.slice(1);

    // Concatinate the chars in reverse order
    return reverseString(restStr) + firstChar;
}

reverseString('Hello World');
// dlroW olleH
```


<br />

## 4. nth Triangular Number

**`nth-triangular-number.js`**
```
                          *
            *           *    *
*     |   *   *  |   *    *    *  |

 1st       2nd           3rd             nth?  
 ```

```js
const nthTriNum = (n) => {   
    if (n === 1) return n;
    return nthTriNum(n - 1) + n;
};

nthTriNum(9);
// 45
```



<br />

## 5. String Splitter

**`string-splitter.js`**

```js
const stringSplitter = (str, separator) => {

    // base case
    if (!str.includes(separator)) {
        return [str];
    }

    const separatorIdx = str.indexOf(separator);
    const splitStr = str.slice(0, separatorIdx);
    const remainingStr = str.slice(separatorIdx + 1, str.length);

    // We go all the way down to the base case to get the array 
    // that we will use to contain all of our separated strings.
    const arr = stringSplitter(remainingStr, separator);

    // The reason this works is because the functions resolve in order during the backward phase. 
    // That is to say, each function returns an array to the function that called it.
    
    arr.unshift(splitStr); // prepend (unshift) instead of append (push)

    return arr;

};

let str = 'taco/burritto/enchilada';

console.log(stringSplitter(str, '/'));
```




<br />

## Asides 

**`funfun.js`** countdown and making a tree, per: [Fun Fun Function video](https://www.youtube.com/watch?v=k7-N8R0-KY4&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=7)

**`collatz.js`** Ooooh, the Collatz conjecture ;P per: [Recursion Intro by Harvard CS50](https://youtu.be/VrrnjYgDBEk?t=572)