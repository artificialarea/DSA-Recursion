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