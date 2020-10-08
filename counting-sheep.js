let countingSheep = (num) => {
    if (num === 0) {
        return 'All sheep jumped over the fence';
    }
    let result = `${num}: Another sheep jumps over the fence\n`;
    
    return result + countingSheep(num - 1);
};

console.log(countingSheep(3));