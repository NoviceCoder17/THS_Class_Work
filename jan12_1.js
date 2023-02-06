// Objects , arrays are Mutable
// STRINGS are not Mutable// Immutable

var object = {
    prema: {
        fullname: "shivarama",
        email : "p@gmail.com"
    },
    shiva:{
        lastname : "sm",
        email : "s@gmail.com"

    },
    2 : "trial",
    "x-auth-token" : "qerrrffeffrf#@22"
}

console.log(object.prema.email)
console.log(object["2"])
console.log(object["x-auth-token"])
//console.log(object.x-auth-token)  - This does not work as it considers as a diff word
// We can add/create new key value pairs
object["attributes"] = "This is new key value pair"
console.log(object)
//edit key-value pairs
object.prema.email = "Sup@email.com"
console.log(object)
// delete any key value pai
delete object["x-auth-token"]
console.log(object)
// object["a"]= [9, 99, 999]
// object["b"] = [1,2,3,4,5],
// object["c"]=  ["abc",{
//     a: 11,
//     b : 12,
// } ]

object.a= [9, 99, 999]
object.b = [1,2,3,4,5],
object.c=  ["abc",{
    a: 11,
    b : 12,
} ]
console.log(object)
console.log(object.c[1].a)