var {data} = require("./Jan18_3_data.js")
// data.sort((a,b)=>{
//    // console.log(a.id , b.id)   // a and b become objects of element
//    // +ve -ve or 0
//     return b.id - a.id
// })
// console.log(data)
data.sort((a,b)=>{
    //can use .toUppercase and toLowerCase
    // we cannot use a - b directly as it sorts by ID
     if( a.name < b.name)
     {
        return -1
     }
     else if(a.name > b.name){
        return 1
     }
     else{
        return 0
     }
 })
 console.log(data)