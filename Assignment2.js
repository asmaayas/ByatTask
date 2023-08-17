// 1. Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as a parameter to the callback function.


// Sample:

// var allAreLessThanSeven = all([1,2,9], function(num){

// return num < 7;

// });

// console.log(allAreLessThanSeven); // false



function all(array, callback) {
    for (let index = 0; index < array.length; index++) {
        if (!callback(array[index])) {
            return false; 
        }
    }
    return true;  
}


function lessThan7(num) {
	return num < 7;
}

const numbers = [0,2,1];
console.log(all(numbers,lessThan7) );

// 2. Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.



// Sample Object:

// var nestedObject = {

//     data: {

//         info: {

//             stuff: {

//                 thing: {

//                     moreStuff: {

//                         magicNumber: 44,

//                         something: 'foo2'

//                     }

//                 }

//             }

//         }

//     }

// }


function contains(obj, value) {
    for (const key in obj) {
        if (obj[key] === value) {
            return true; 
        }
        //  return contains(obj[key], value);
        
        if (typeof obj[key] === 'object') {
            return contains(obj[key], value);
           
        }
    }
    
    return false; 
}

const nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
};

console.log(contains(nestedObject, 44));       // Output: true
console.log(contains(nestedObject, 'foo2'));   // Output: true
console.log(contains(nestedObject, 'bar'));    // Output: false

