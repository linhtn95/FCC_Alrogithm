// Sum all number in a range
function sumAll(arr) {
    let sum = 0;

    let max = arr.reduce( (a, b) => {
        return Math.max(a, b);
    });

    let min = arr.reduce( (a, b) => {
        return Math.min(a, b);
    });

    for(let i = min; i <= max; i++) {
        sum += i;
    }
    
    return sum;
}

sumAll([1, 4]);



