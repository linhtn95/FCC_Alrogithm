
function whatIsInAName(collection, source) {

    let arr = [];
    
    let keyObj = Object.keys(source); 

    arr = collection.filter( item => {
      for(var i = 0; i < keyObj.length; i++) {
        if (!item.hasOwnProperty(keyObj[i]) || item[keyObj[i]] !== source[keyObj[i]]) {
          return false;
        }
      }
      return true;
    });

    return arr;
}
  
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet"}));
  