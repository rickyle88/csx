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
Object.keys(obj).reduce((p,c)=> p.concat(obj[c]),[]) ;

// Solution 02
mapr = o => Object.keys(o).map(key => o[key]);

const tmp = mapr(validation_messages);

for(let t in tmp){
    console.log(tmp[t]);
}


/////////////////////////////////////////////////////////////////

//console.log(mapr);
