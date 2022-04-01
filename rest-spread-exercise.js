
//--------
// task
//--------
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  //---------
  // solution
  //---------
  
  function filterOutOdds(...argList) {
      return argList.filter(arg => arg % 2 === 0);
  }
  

//--------
// task: Write a function called findMin that accepts a variable 
// number of arguments and returns the smallest argument.
//--------
function findMin(...argList) {
    return argList.reduce((min, next) => (next < min ? next : min));
}

//--------------------------------------------------------------------
// task: Write a function called mergeObjects that accepts two objects
//  and returns a new object which contains all the keys and values of
//  the first object and second object.
//---------------------------------------------------------------------

function mergeObjects (obj1, obj2) {
    return {...obj1, ...obj2};
}


//----------------------------------------------------------------------
// task : Write a function called doubleAndReturnArgs which accepts an
// array and a variable number of arguments. The function should return 
// a new array with the original array values and all of additional 
// arguments doubled.
//----------------------------------------------------------------------

function doubleAndReturnArgs (arr, ...restArgs) {
    return [arr, ...restArgs.map(arg => arg * 2)];
}

//----------------------------------------------------------------------
//remove a random element in the items array
// and return a new array without that item. 
//----------------------------------------------------------------------

function removeRandom(items) {    
    const idx = Math.floor((Math.random()) * items.length);
    const newArr = [...items];  
    return newArr.filter((val, i) => i !== idx);
}

//----------------------------------------------------------------------
// Return a new array with every item in array1 and array2. 
//---------------------------------------------------------------------- 

function extend(array1, array2) {
    return [...array1, ...array2];

}

//----------------------------------------------------------------------
// Return a new object with all the keys and values
// from obj and a new key/value pair 
//----------------------------------------------------------------------

function addKeyVal(obj, key, val) {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

//----------------------------------------------------------------------
// Return a new object with a key removed. 
//----------------------------------------------------------------------

function removeKey(obj, key) {  
    const newObj = {...obj};
    delete newObj[key];
    return newObj;   
}

//----------------------------------------------------------------------
// Combine two objects and return a new object. 
//----------------------------------------------------------------------

function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}

//----------------------------------------------------------------------
// Return a new object with a modified key and value. 
//----------------------------------------------------------------------

function update(obj, key, val) {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

  


