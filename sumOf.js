const sumOf = (list) => {
    // base case
    if (list.length === 1) 
        return list[0];
    // general recursive case
    console.log('list[0]: ',list[0]);
    console.log('list.slide(1): ', list.slice(1))
    return list[0] + sumOf(list.slice(1));
}

let lst = [2, 4, 6, 8, 10];
console.log(sumOf(lst));