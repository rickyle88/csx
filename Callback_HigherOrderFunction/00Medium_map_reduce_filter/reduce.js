// .reduce()
// Just like .map(), .reduce() also runs a callback for each element of an array. What’s different here is that reduce passes the result of this callback (the accumulator) from one array element to the other.

// The accumulator can be pretty much anything (integer, string, object, etc.) and must be instantiated or passed when calling .reduce().

// Time for an example! Say you have an array with these pilots and their respective years of experience:

var pilots = [
    {
        id: 10,
        name: "Poe Dameron",
        years: 14,
    },
    {
        id: 2,
        name: "Temmin 'Snap' Wexley",
        years: 30,
    },
    {
        id: 41,
        name: "Tallissan Lintra",
        years: 16,
    },
    {
        id: 99,
        name: "Ello Asty",
        years: 22,
    }
];

// We need to know the total years of experience of all of them. With .reduce(), it’s pretty straightforward:



let totalYears_reduce = pilots.reduce(function(acc, pilot, index ){
    return acc + pilot.years;
}, 0);

console.log(totalYears_reduce);

////////////

const arr = [1,2,3,4,5];
const total = arr.reduce((acc, item) => acc+= item, 0);
console.log(total);
// return a total as 15