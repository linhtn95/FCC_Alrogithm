function pairElement(str) {

    let arr = str.split('');
    let result = [];
    arr.forEach(e => {
        if(e == 'A') {
            result.push([e, 'T']);
        } else if(e == 'T') {
            result.push([e, 'A']);
        } else if(e == 'C') {
            result.push([e, 'G']);
        } else if(e == 'G') {
            result.push([e, 'C']);
        }
    });

    return result;
}
  
console.log(pairElement("ATCGA"));
  