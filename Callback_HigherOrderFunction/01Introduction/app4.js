// ADD CODE HERE
// function reduce(array, callback, initValue){
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         sum += callback(array[i], initValue);
//     }

//     return sum;
//   }

// Input: array, callback, initial value
// Output a single value
// Check to see if frst arg is an array
// Initialize out acc value
// Check to see of third arg, the initial value is defined
// Iterate over the array
// Set the acc to be the result of calling the callback with the arg acc, current element return the acc
function reduce(array, callback, initValue) {
    if (Array.isArray(array)) {
        let acc;
        if (initValue === undefined) {
            acc = array[0];
            // Remove first element
            array = array.slice(1);
        } else {
            acc = initValue;
        }

        array.forEach(function (ele, index) {
            acc = callback(acc, ele, index);
        })

        return acc;
    }

    return "The first arg should be an array";
}

// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function (a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8


let arr = [1, 2, 3, 4, 5,0];

arr.forEach((item, index) => {
    if(item === 2) {
        arr.shift();
    }
    console.log("Item: " + item + " - Index: " + index);
});

console.log(arr);

