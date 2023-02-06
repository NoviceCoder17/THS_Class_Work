var {data} = require("./Jan18_3_data.js")

//Prema
// var filtered= data.filter((ele)=>{
//     if(ele.name=="Glenna Reichert"){
//         return ele.address.geo  // returns array of objects
//     }
// })

// console.log(filtered)

//class

function getGeo(data, fname){
    var result= data.filter(ele => ele.name === "Glenna Reichert").map(ele=>ele.address.geo)
    //filter will get an object and from the object to get geo we can use .map
    var output = data.find(ele => ele.name === "Glenna Reichert")
    console.log(output)   // find returns of objects(returns the first found word/whatever)
    console.log(result[0])
}
getGeo(data, "Glenna Reichert")
console.log(data[8].address.geo)