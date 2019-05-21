// .map()
// Let me explain how it works with a simple example. Say you have received an array containing multiple objects – each one representing a person. The thing you really need in the end, though, is an array containing only the id of each person.

// What you have
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];

  // What you need
//[20, 24, 56, 88]

// Using .forEach():

var officersIds = [];
officers.forEach(function (officer) {
  officersIds.push(officer.id);
});

console.log(officersIds);

// Notice how you have to create an empty array beforehand? Let’s see what it looks like when using .map():
let officersIds_map = officers.map(function(officer){
    return officer.id;
});

console.log(officersIds_map);

// We can even be more concise with arrow functions (requires ES6 support, Babel or TypeScript)
let officersIds_map_es6 = officers.map(officer => officer.id);
console.log(officersIds_map_es6);

// So how does .map() work? Basically is takes 2 arguments, a callback and an optional context (will be considered as this in the callback) which I did not use in the previous example. The callback runs for each value in the array and returns each new value in the resulting array.

// Keep in mind that the resulting array will always be the same length as the original array.