let countingSheep = (num) => {
    // base case
    if (num === 0) {
        console.log('All sheep jumped over the fence');
        return;
    }
    // general recursive case
    console.log(`${num}: Another sheep jumps over the fence`)
    countingSheep(num - 1);
};

countingSheep(3);