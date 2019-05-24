console.log("Hello world");

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
const arrCompare = [1,2,3,4,5,6,7,8];

const result = arr.filter(val => arrCompare.includes(val));

console.log(result);

// Array(8) [1, 2, 3, 4, 5, 6, 7, 8]

const result1 = arr.filter(val => !arrCompare.includes(val));

console.log(result1);

// Array(9) [9, 10, 11, 12, 13, 14, 15, 16, …]

let a = [
    {prop1: "abc", prop2: "qwe"},
    {prop1: "bnmb", prop2: "yutu"},
    {prop1: "zxvz", prop2: "qwrq"}
]

let index = a.findIndex(x => x.prop2 == "qwrq");

console.log(index);