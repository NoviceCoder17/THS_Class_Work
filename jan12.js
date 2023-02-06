//Objects
//is a Data type 
//Key value pairs
var obj = {
    a : 2,  //a is the key and 2 is the value
    b : "hello",  // can store boolean, string, another object, function
    c: {             
        aa: 22
    }
}

console.log(obj.b)   // . is used to get keys 
console.log(obj.a)
console.log(obj.c.aa)
console.log(obj.c)


// Use of object
// Json is similar as object(JAvaScript Object notation)
// How data is stored
// Below is the JSON form
// all API's use JSON
//Diff b/w json and Object is that it uses " " and object can be used without ""
//JSON cannot contain functions. 
//JavaScript objects can contain functions.
//JSON can be created and used by other programming languages. 
//JavaScript objects can only be used in JavaScript.
var prema= {               //Key values can be used in "" or without
    "age" : 150,
    "who am i": 18,
    "hobbies" : ['reading', 'sleeping', 'coding'],
    "address": {
        city : 'Canada',                // All data communicated in the form of json format for web applications
    }                                   // Which uses object
}
console.log(prema.age)
console.log(prema.hobbies[2])

//Order does not matter
console.log(prema["age"])    // this is the second way ["Key"]
// There are two ways to get the key value pairs in the object
console.log(prema["hobbies"][1])