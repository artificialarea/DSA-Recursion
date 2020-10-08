// src: https://www.youtube.com/watch?v=k7-N8R0-KY4&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=7

// to run this script in terminal type command:
// node script.js


// 1 ////////////////////////////////////////////////////
// Recursion: a function that calls itself...
let countDownFrom = (num) => {

    if (num === 0) return;  // ...until it doesn't.

    console.log(num);
    countDownFrom(num-1);
}

countDownFrom(10);


// 2 ////////////////////////////////////////////////////
let categories = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' },
];

let makeTree = (categories, parent) => {
    let node = {};
    categories
        .filter(c => c.parent === parent)
        .forEach(c => 
            node[c.id] = makeTree(categories, c.id))
    return node;
};

console.log(
    JSON.stringify(
        makeTree(categories, null)
        , null, 4)
);


// // makeTree: end goal
// {
//     animals: {  
//         mammals: {
//             dogs: {
//                 chihuahua: null
//                 labrador: null 
//             },
//             cats: {
//                 persian: null
//                 siamese: null
//             }
//         }
//     }
// }