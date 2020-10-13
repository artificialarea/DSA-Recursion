# Recursion exercises

Data Structures & Algorithms instructions: https://courses.thinkful.com/dsa-v1/checkpoint/2#assignment

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

**[`counting-sheep.js`](https://github.com/artificialarea/DSA-Recursion/blob/master/counting-sheep.js)**

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

**[`power-calculator.js`](https://github.com/artificialarea/DSA-Recursion/blob/master/power-calculator.js)**

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

**[`reverse-string.js`](https://github.com/artificialarea/DSA-Recursion/blob/master/reverse-string.js)** _see comments in file re: 'backward phase of recursion'..._

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

**[`nth-triangular-number.js`](https://github.com/artificialarea/DSA-Recursion/blob/master/nth-triangular-number.js)**
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

**[`string-splitter.js`](https://github.com/artificialarea/DSA-Recursion/blob/master/string-splitter.js)**

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

## 6. Fibonacci

**[`fibonacci.js`](https://github.com/artificialarea/DSA-Recursion/blob/master/fibonacci.js)**

```js

const fibonacci = (n) => { // index of the nth Fibonacci number
    if (n < 2) return n;
    return fibonacci(n-1) + fibonacci(n - 2);
};

fibonacci(10); 
// O(2^n) Exponential Time Complexity.
// Beyond the 40th Fibonacci number we are getting into BigInt territory 
// and thus JS unable to compute quickly, if at all
```


<br />

## 7. Factorial

**[`factorial.js`](https://github.com/artificialarea/DSA-Recursion/blob/master/factorial.js)**

```js
const factorial = (n) => {
    if (n === 1) return n;
    return n * factorial(n - 1);
};

factorial(5);
```

<br />

## 8. Find a way out of the maze

**['`maze-runner-v1.js`](https://github.com/artificialarea/DSA-Recursion/blob/master/maze-runner-v1.js)**

```js
const recursiveMazeRunner = (maze, x = 0, y = 0) => {    // where x = column, y = row
    maze.forEach(row => console.log(JSON.stringify(row)));
    console.log(' ');

    // Set up the base case
    if (maze[y][x] === 'e') {
        console.log(' and you made it!');
        return ' and you made it!';
    }

    // Void our current location so we don't backtrack
    maze[y][x] = '@';

    // Check available spaces and move
    if ( maze[y][x - 1] && (maze[y][x - 1] === ' ' || maze[y][x - 1] === 'e')) {
        return 'L' + recursiveMazeRunner(maze, x - 1, y);
    };
    if ( maze[y][x + 1] && (maze[y][x + 1] === ' ' || maze[y][x + 1] === 'e')) {
        return 'R' + recursiveMazeRunner(maze, x + 1, y);
    };
    if ( maze[y + 1][x] && (maze[y + 1][x] === ' ' || maze[y + 1][x] === 'e')) {
        return 'D' + recursiveMazeRunner(maze, x, y + 1);
    };
    if ( maze[y - 1][x] && (maze[y - 1][x] === ' ' || maze[y - 1][x] === 'e')) {
        return 'U' + recursiveMazeRunner(maze, x, y - 1);
    };
   
    // When no conditions are satisfied
    console.log(' you hit a wall!');
    return ' you hit a wall!';
}; 


// Construct some mazes...
// ' ' = open path
// '*' = wall
// 'e' = exit/goal

let smallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let mazeTrap = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['*', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

recursiveMazeRunner(maze);

```



<br />

## 9. Find ALL the ways out of the maze

**[`maze-runner-v2.js`](https://github.com/artificialarea/DSA-Recursion/blob/master/maze-runner-v2.js)**

> Incomplete. Sadly, I have no idea what I'm doing here... just following my mentor's lead.



<br />

## 10. Anagrams

**[`anagrams.js`](https://github.com/artificialarea/DSA-Recursion/blob/master/anagrams.js)**




<br />

## 11. Org Chart

**[`org-chart.js`](https://github.com/artificialarea/DSA-Recursion/blob/master/org-chart.js)**

Kinda did it.

My output was...
```
{
    "Zuckerberg": {
        "Schroepfer": {
            "Bosworth": {
                "Steve": {},
                "Kyle": {},
                "Andra": {}
            },
            "Zhao": {
                "Richie": {},
                "Sofia": {},
                "Jen": {}
            }
        },
        "Schrage": {
            "VanDyck": {},
            "Swain": {
                "Blanch": {},
                "Tom": {},
                "Joe": {}
            }
        },
        "Sandberg": {
            "Goler": {
                "Eddie": {},
                "Julie": {},
                "Annie": {}
            },
            "Hernandez": {
                "Rowi": {},
                "Inga": {},
                "Morgan": {}
            },
            "Moissinac": {
                "Amy": {},
                "Chuck": {},
                "Vinni": {}
            },
            "Kelley": {
                "Eric": {},
                "Ana": {},
                "Wes": {}
            }
        }
    }
}
```

instead of...
```
Zuckerberg
    Schroepfer
        Bosworth
            Steve
            Kyle
            Andra
        Zhao
            Richie
            Sofia
            Jen
    Schrage
        VanDyck
            Sabrina
            Michelle
            Josh
        Swain
            Blanch
            Tom
            Joe
    Sandberg
        Goler
            Eddie
            Julie
            Annie
       Hernandez
            Rowi
            Inga
            Morgan
       Moissinac
            Amy
            Chuck
            Vinni
       Kelley
            Eric
            Ana
            Wes
```



<br />

## Asides 

**`funfun.js`** countdown and making a tree, per: [Fun Fun Function video](https://www.youtube.com/watch?v=k7-N8R0-KY4&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=7)

**`collatz.js`** Ooooh, the Collatz conjecture ;P per: [Recursion Intro by Harvard CS50](https://youtu.be/VrrnjYgDBEk?t=572)
