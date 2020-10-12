const recursiveMazeRunnerAllRoutes = (originMaze, x = 0, y = 0, path = '') => {    // where x = column, y = row

    const maze = [...originMaze]
    maze.forEach(row => console.log(JSON.stringify(row)));
    console.log(' ');

    // Set up the base case
    if (maze[y][x] === 'e') {
        let result = `Path to exit: ${path}`;
        console.log(result);
        return result;
    };

    // Void our current location so we don't backtrack
    maze[y][x] = '@';

    const availabeMoves = {
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
    console.log(availabeMoves);


    for (let prop in availabeMoves) {
        let direction = availabeMoves[prop];
        if (direction.contains !== '*' && direction.contains !== '@') {
            let newPath = path + direction.char;
            console.log('Starting from x:', x, 'y:', y);
            recursiveMazeRunnerAllRoutes(
                maze,
                direction.location[0],
                direction.location[1],
                newPath
            )
        }
    }

    return;
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

recursiveMazeRunnerAllRoutes(maze);