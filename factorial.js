const factorial = (n) => {
    if (n === 1) return n;
    return n * factorial(n - 1);
};

const num = 10;
console.log(`${num}! is `, factorial(num));