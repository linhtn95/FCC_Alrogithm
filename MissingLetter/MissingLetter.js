function fearNotLetter(str) {
    str = str.toLowerCase();
    let letter;

    for (i = str.length; i > 0; i--) {
        if ((str.charCodeAt(i) - str.charCodeAt(i - 1)) > 1) {
            letter = String.fromCharCode(str.charCodeAt(i) - 1);
        }
    }

    return letter;
}

console.log(fearNotLetter("abce"));