const arr = new Array(10).fill(2, 3,5)
console.log(arr)
arr.forEach(ele => console.log(ele))

const arr2 = Array.from(arr)          // Deep cpoy/ duplicates
console.log(arr2)
console.log(arr2==arr)

// OBJECT Computed properties

const funny = "You"
const obj = {
    you: funny,
    me : "Prema", 
    others: "others",
    others: "donkey",
    others: "You"            // Not logical as we use objects for unique key value pairs
}                              // This outputs the last value = you
console.log(obj)

const funny1 = "You"
const obj1 = {
    [funny1]: funny,
    me : "Prema", 
    others: "others}