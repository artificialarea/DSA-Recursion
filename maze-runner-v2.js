/* Marius says...
Still working on this one! 
I used a slightly different solution than before, setting up an object that represents all available moves and calling the function on each move.
I think I'm close to a solution, but something isn't quite right yet
*/


const recursiveMazeRunnerAllRoutes = (originalMaze, x = 0, y = 0, path = '') => {    // where x = column, y = row

    const maze = [...originalMaze]
    maze.forEach(row => console.log(JSON.stringify(row)));
    console.log(' ');

    // Set up the base case
    if (maze[y][x] === 'e') {
        let result = `PATH TO EXIT FOUND! ${path}`;
        console.log(result);
        return result;
    };

    // Void our current location so we don't backtrack
    maze[y][x] = 'O';

    const availableMoves = {
        up: {
            char: 'U',
            location: [x, y - 1],
            contains: maze[y - 1] ? maze[y - 1][x] : '*',
        },
        down: {
            char: 'D',
            location: [x, y + 1],
            contains: maze[y + 1] ? maze[y + 1][x] : '*',
        },
        left: {
            char: 'L',
            location: [x - 1, y],
            contains: maze[y][x - 1] ? maze[y][x - 1] : '*',
        },
        right: {
            char: 'R',
            location: [x + 1, y],
            contains: maze[y][x + 1] ? maze[y][x + 1] : '*',
        },
        
    };

    for (let prop in availableMoves) {
        let direction = availableMoves[prop];
        if (direction.contains !== '*' && direction.contains !== 'O') {
            let newPath = path + direction.char;
            
            // log cirumstances at each point in the process
            console.log('Starting from x:', x, 'y:', y);
            console.log(availableMoves);
            console.log('newPath: ', newPath);

            recursiveMazeRunnerAllRoutes(
                maze,
                direction.location[0],
                direction.location[1],
                newPath
            );
        }
    }

    return;
}; 


// Construct some mazes...
// ' ' = open path
// '*' = wall
// 'e' = exit/goal

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

recursiveMazeRunnerAllRoutes(maze);

// 3 Solutions for maze:
// RRDDLLDDRRRRRR 
// RRDDRRUURRDDDD 
// RRDDRRRRDD