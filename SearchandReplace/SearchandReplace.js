function myReplace(str, before, after) {

    if(before.charAt(0) === before.charAt(0).toUpperCase()) {
        after =  after.charAt(0).toUpperCase() + after.slice(1);
    } else if(before.charAt(0) === before.charAt(0).toLowerCase()) {
        after =  after.charAt(0).toLowerCase() + after.slice(1);
    }
    
    str = str.replace(before, after);
    return str;
}
  
console.log(myReplace("Let us go to the store", "store", "mall"));
  