// seperates/splits string in an array based on instances of the '/' seperator
// e.g.
// Input: 02/20/2020
// Output: ["02", "20", "2020"]

const stringSplitter = (str, separator) => {

    // base case
    if (!str.includes(separator)) {
        console.log('[str]: ', [str]);
        return [str];
    }

    // in general, recursion
    const separatorIdx = str.indexOf(separator);
    const splitStr = str.slice(0, separatorIdx);
    const remainingStr = str.slice(separatorIdx + 1, str.length);
    console.log('splitStr: ', splitStr);
    console.log('remainingStr: ', remainingStr);

    // We go all the way down to the base case to get the array that we will use to contain all of our separated strings.
    const arr = stringSplitter(remainingStr, separator);
    console.log('arr: ', arr)

    // The reason this works is because the functions resolve in order during the backward phase. That is to say, each function returns an array to the function that called it.
    
    arr.unshift(splitStr); // prepend (unshift) instead of append (push)

    return arr;

};

let str = 'taco/burritto/enchilada';

console.log(stringSplitter(str, '/'));