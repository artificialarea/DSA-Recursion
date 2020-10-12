const reverseString = (str) => {
    // base
    if (str.length === 1) return str;

    // Split first char and the remaining chars of string
    const firstChar = str.charAt(0);
    const restStr = str.slice(1);

    console.log(str);
    // Note sequence for reverseString('Hello')
    // Hello
    // ello
    // llo
    // lo
    // olleH // Confused. How does `str` only flip string once reaches the base case? Where is the reverse char sequence being stored?

    // Concatinate the chars in reverse order
    return reverseString(restStr) + firstChar;

}

console.log(reverseString('Hello'));




// initial #fail. 
// because I persist in thinking iteratively (but without a for loop >_<)
// const reverseString = (str) => {
//     let newStringArr = []; 
//     // base
//     if (str.length === 0)
//         return newStringArr;
//     // recursion
//     console.log(str.charAt(0), newStringArr)
//     newStringArr.push(str.charAt(0))
//     return reverseString(str.slice(1));

// };

// console.log(reverseString('hello'));




/*

// What is the input to the program?
String.

// What is the output of the program?
Reverses a string's characters.

// What is the input to each recursive call?
originalStr with one fewer character via `originalStr.slice(1)`

// What is the output of each recursive call?
newStr.push(originalStr[originalStr.length - 1]) + 

// e.g.


*/