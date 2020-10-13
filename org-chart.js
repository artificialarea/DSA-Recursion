const orgChart = (people, manager) => {
    let node = {};
    people
        .filter(p => p.manager === manager)
        .forEach(p => {
            node[p.name] = orgChart(people, p.name);
        });
        
    return node;

};



// Input
// as an array of objects (not sure if structure correct, but...)
// rather than as an object, per suggestion.

let store = [
    { name: 'Zuckerberg', manager: null },

    { name: 'Schroepfer', manager: 'Zuckerberg' },
    { name: 'Schrage', manager: 'Zuckerberg' },
    { name: 'Sandberg', manager: 'Zuckerberg' },

    { name: 'Bosworth', manager: 'Schroepfer' },
    { name: 'Zhao', manager: 'Schroepfer' },
    
    { name: 'VanDyck', manager: 'Schrage' },
    { name: 'Swain', manager: 'Schrage' },
    
    { name: 'Goler', manager: 'Sandberg' },
    { name: 'Hernandez', manager: 'Sandberg' },
    { name: 'Moissinac', manager: 'Sandberg' },
    { name: 'Kelley', manager: 'Sandberg' },

    { name: 'Steve', manager: 'Bosworth' },
    { name: 'Kyle', manager: 'Bosworth' },
    { name: 'Andra', manager: 'Bosworth' },
    
    { name: 'Richie', manager: 'Zhao' },
    { name: 'Sofia', manager: 'Zhao' },
    { name: 'Jen', manager: 'Zhao' },

    { name: 'Sabrina', manager: 'VanDyke' },
    { name: 'Michelle', manager: 'VanDyke' },
    { name: 'Josh', manager: 'VanDyke' },

    { name: 'Blanch', manager: 'Swain' },
    { name: 'Tom', manager: 'Swain' },
    { name: 'Joe', manager: 'Swain' },
    
    { name: 'Eddie', manager: 'Goler' },
    { name: 'Julie', manager: 'Goler' },
    { name: 'Annie', manager: 'Goler' },
    
    { name: 'Rowi', manager: 'Hernandez' },
    { name: 'Inga', manager: 'Hernandez' },
    { name: 'Morgan', manager: 'Hernandez' },
    
    { name: 'Amy', manager: 'Moissinac' },
    { name: 'Chuck', manager: 'Moissinac' },
    { name: 'Vinni', manager: 'Moissinac' },
    
    { name: 'Eric', manager: 'Kelley' },
    { name: 'Ana', manager: 'Kelley' },
    { name: 'Wes', manager: 'Kelley' },

];

// orgChart(store);

// JSON.stringify(value[, replacer[, space]])
console.log(
    JSON.stringify(
        orgChart(store, null)
        , null, 4)
);




/* 
Output should be as shown below, including hierarchy indentations...

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
*/