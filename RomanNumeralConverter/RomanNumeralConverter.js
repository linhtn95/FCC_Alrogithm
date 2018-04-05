function convertToRoman(num) {
    let h = ['','C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    let t = ['','X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    let u = ['','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    return 'M'.repeat(Math.floor(num / 1000)) + h[((Math.floor(num / 100)) % 10)] + t[((Math.floor(num / 10)) % 10)] + u[(num % 10)];
}

console.log(convertToRoman(1256));