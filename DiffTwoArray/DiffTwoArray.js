// Diff to array

function diffArray(arr1, arr2) {
    let newArr = [];
   
    let a1 = arr1.filter( el => {
        return arr2.indexOf(el) === -1;
    });
    //console.log(a1);
    let a2 = arr2.filter( el => {
        return arr1.indexOf(el) === -1;
    });
    //console.log(a2);

    newArr = a1.concat(a2);
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])