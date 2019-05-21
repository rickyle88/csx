
// Now suppose we have a function copyArrayAndMultiplyBy2. Let's diagram it out

function copyArrayAndManipulate(array, instructions){
    let output =[];
    for(let i = 0; i < array.length; i++){
        output.push(instructions(array[i]));
    }
    return output;
}

function multiplyBy2(item){
    return item * 2;
}

const myArray = [1,2,3];
let result = copyArrayAndManipulate(myArray, multiplyBy2);

console.log(result);