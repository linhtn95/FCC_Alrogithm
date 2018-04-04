// Sum all number in a range
function sumAll(arr) {
    let sum = 0;

    let max = Math.max(...arr);
    let min = Math.min(...arr);

    for(let i = min; i <= max; i++) {
        sum += i;
    }
    
    return sum;
}

console.log(sumAll([1, 5, 4]));



