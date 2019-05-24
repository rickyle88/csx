var validation_messages = {
    "key_1": {
        "your_name": "jimmy",
        "your_msg": "hello world"
    },
    "key_2": {
        "your_name": "billy",
        "your_msg": "foo equals bar"
    }
}

// Using for...in
for (let key in validation_messages) {
    // skip the loop if the property is from prototype
    if (!validation_messages.hasOwnProperty(key)) continue;

    let obj = validation_messages[key];
    for (let prop in obj) {
        // skip the loop if the property is from prototype
        if (!obj.hasOwnProperty(prop)) continue;

        // Your code
        console.log(prop + " = " + obj[prop]);
    }
}

// for...in is a good solution, but if you use promises in the for()-loop be careful, because if you create a var in the loop, you can't use it in the promise' then-function. You var in the loop exists only one time, so it has in every then-function the same, even the last value. If you have that problem, try "Object.keys(obj).forEach" or my answer below.

let obj = {
    first: "John",
    last: "Doe"
};

//
//	Visit non-inherited enumerable keys
//
Object.keys(obj).forEach(function (key) {

    console.log(key, obj[key]);

});

//////////////////////////////////////////////////////////////////
// Solution 01
Object.keys(obj).reduce((p, c) => p.concat(obj[c]), []);

// Solution 02
mapr = o => Object.keys(o).map(key => o[key]);

const tmp = mapr(validation_messages);

for (let t in tmp) {
    console.log(tmp[t]);
}

// Solution 03: If you are in react, you probably want to use .map() instead of .forEach()
// https://stackoverflow.com/questions/39965579/how-to-loop-an-object-in-react

/////////////////////////////////////////////////////////////////
// https://stackoverflow.com/questions/921789/how-to-loop-through-a-plain-javascript-object-with-the-objects-as-members

var myObj = {
    a: 'foo',
    b: 'bar'
};

// In ES6 you can loop through an object like this:
Object.keys(myObj).forEach(key => {
    console.log(key);          // the name of the current key.
    console.log(myObj[key]);   // the value of the current key.
});

// The above would also work as a one-liner:
Object.keys(myObj).forEach(key => console.log(key, myObj[key]));

// In ES7 you can use Object.entries instead of Object.keys and loop through an object like this:
Object.entries(myObj).forEach(([key, val]) => {
    console.log(key);          // the name of the current key.
    console.log(val);          // the value of the current key.
});

/////////////////////////////////////

// In case you want to loop through nested objects as well, you can use a recursive function (ES6):
const loopNestedObj = (obj) => {
    Object.keys(obj).forEach(key => {
        if (obj[key] && typeof obj[key] === 'object') loopNestedObj(obj[key]);  // recurse.
        else console.log(key, obj[key]);  // or do something with key and val.
    });
};

// const tmp1 = loopNestedObj(validation_messages);

// Same as function above, but with ES7 Object.entries instead of Object.keys:
const loopNestedObj1 = (obj) => {
    Object.entries(obj).forEach(([key, val]) => {
        if (val && typeof val === 'object') loopNestedObj(val);  // recurse.
        else console.log(key, val);  // or do something with key and val.
    });
};

//////////////////////////////////
// If you are into functional programming you can use Object.keys/Object.entries to enumerate the object, then process the values and then use reduce() to convert back to a new object.
const loopNestedObj2 = (obj) =>
    Object.keys(obj)
        // Use .filter(), .map(), etc. if you need.
        .reduce((newObj, key) =>
            (obj[key] && typeof obj[key] === 'object') ?
                { ...newObj, [key]: loopNestedObj(obj[key]) } :  // recurse.
                { ...newObj, [key]: obj[key] },                  // Define value.
            {});
/////////////////////////////////////////////////////////////////


// If you use recursion you can return object properties of any depth-
// return => string
function lookdeep(object){
    var collection= [], index= 0, next, item;
    for(item in object){
        if(object.hasOwnProperty(item)){
            next= object[item];
            if(typeof next== 'object' && next!= null){
                collection[index++]= item +
                ':{ '+ lookdeep(next).join(', ')+'}';
            }
            else collection[index++]= [item+':'+String(next)];
        }
    }
    return collection;
}

//example

var O={
    a:1, b:2, c:{
        c1:3, c2:4, c3:{
            t:true, f:false
        }
    },
    d:11
};
var lookdeepSample= 'O={'+ lookdeep(O).join(',\n')+'}';
// Return a string
console.log(lookdeepSample);        
console.log(typeof(lookdeepSample));
/*  returned value: (String)
O={
    a:1, 
    b:2, 
    c:{
        c1:3, c2:4, c3:{
            t:true, f:false
        }
    },
    d:11
}

*/

let t2 = lookdeep(O);
console.log(typeof(t2));
for(let i = 0; i < t2.length; i++){
    console.log(t2[i]);
}


/*  returned value: (String)
O={
    a:1, 
    b:2, 
    c:{
        c1:3, c2:4, c3:{
            t:true, f:false
        }
    },
    d:11
}

*/
