// I took that challenge to make some experimentation myself, and I kept refactoring the answer till I got a one liner (solution in only one line of code), so I can give you a few diiferent approaches haha

// _spoiler: using reduce it becomes extremely easy solve._

// I never thought about an approach such as yours (with a hash table), so thanks for sharing :grin:. However, the use of the `in` operator could be replaced by the method `array.includes`. The `in` operator checks wether a property is present in an object (_or its prototype chain_). That could be a problem as you should not be checking the prototype chain in this case. array.includes is more specific to the task in mind and also accounts for several edge cases. Check both mdn docks for further info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

// Here is a code sample from my csx solution, a helper function which finds the repeated elements in two arrays:

function repeatedElems(arr1, arr2){
    const output = [];
    for (let i = 0; i < arr1.length; i++){
      if (arr2.includes(arr1[i])){
          output.push(arr1[i]);    
        }
    }
    
    return output;
  }

//   Then, you should simply keep calling that function feeding as inputs the result of the previous call and the next array, and return the last result. Something like this:

function intersection(arrOfArr){
    let repeatedElemsArray = Array.from(arrOfArr[0]);  // The use of Array.from() makes so that we create a new copy of array at position 0, and we don't modify the original array.
    for (let i = 1; i < arrOfArr.length; i++){
        const nextArray = arrOfArr[i];
        repeatedElemsArray = repeatedElems(repeatedElemsArray, nextArray);
    }
    
    return repeatedElemsArray;
  }

//   However, this kind of functionality is exactly what reduce is intended for (reduce an array of many elements to a single output). In this case, we want to reduce an array of arrays to a single output array, which contains only the repeated elements. This last solution makes use of reduce power (and filter):

function intersection(arrOfArr){
    return arrOfArr.reduce((arr1, arr2) => arr1.filter(x => arr2.includes(x)));
  }

//   It effectively does the same the other two functions did in conjunction, *but concentrates that whole functionality in a single line*. Isn't that beautiful :heart_eyes: That's why you should learn reduce, map and filter. They will be your best friends, those you can almost always count on

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
