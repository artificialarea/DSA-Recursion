const anagramsOf = (str) => {

    if (str.length === 1) return str;
    
    const permutations = [];

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        console.log(char, i, str.indexOf(char));
        
        
        // // I'm confused as to when this conditional would actually be true?
        // if (str.indexOf(char) !== i) {
        //     console.log('continue')
        //     continue;
        //     // the `continue` statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration. 
        // }

        let remainingString = str.slice(0, i) + str.slice(i + 1, str.length);

        for (let subPermutation of anagramsOf(remainingString))
            permutations.push(char + subPermutation);
    }

    console.log(permutations);  // confused why it doesn't return just the final array?
    return(permutations);

};


anagramsOf('east');

// O(n!): worst case scenario, the number of permutations of an anagram is factorial
// e.g. 
// the word 'east' has 4 distinct characters
// ergo, the anamgram has 24 possible permutations
// 4! = 24