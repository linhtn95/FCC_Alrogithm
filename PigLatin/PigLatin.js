function translatePigLatin(str) {

    str = str.toLowerCase();
    let regex = /[ueoai]/g;
    // let newArr = [];
    // if(str.charAt(0) === 'u' || str.charAt(0) === 'e' || str.charAt(0) === 'o' || str.charAt(0) === 'a' || str.charAt(0) === 'i') {
    //     str = str = 'way';
    // } else {
    //     for(i = 0; i < arr.length; i++) {
    //         if(arr[i] === 'u' || arr[i] === 'e' || arr[i] === 'o' || arr[i] === 'a' || arr[i] === 'i') {
    //             break;
    //         } else {
    //             arr= arr.splice(0, 1);
    //         }
    //     }
    //     //console.log(newArr);
    // }

    let checKVoWel = (char) => {
        return regex.test(char);
    }

    if (checKVoWel(str[0])) {
        return str + "way";
    } 
    let arr = str.split('');
    //let temp;
    while (!checKVoWel(arr[0])) {
        //temp = arr.shift();
        arr.push(arr.shift());
    }
    return arr.join("") + "ay";
}

console.log(translatePigLatin("gglove"));