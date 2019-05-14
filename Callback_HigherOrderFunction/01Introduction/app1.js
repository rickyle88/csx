
// Now suppose we have a function copyArrayAndMultiplyBy2. Let's diagram it out

function copyArrayAndMultiplyBy2(array){
    let output =[];
    for(let i = 0; i < array.length; i++){
        output.push(array[i] * 2);
    }
    return output;
}

const myArray = [1,2,3];
let result = copyArrayAndMultiplyBy2(myArray);

console.log(result);