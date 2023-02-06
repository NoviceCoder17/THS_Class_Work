/* 
FS API or Module 
It is inbuilt 
Mini project
Until now we have not dealt with SSD, memory
*/

// fs-We do need node modules to be imported
import fs from "fs";

//CRUD - Create, read, Update, delete- Every sw will have this
//We will create a DB with these operations

// Data stored anywhere it is stored in 16 bits, it has to be converted to string
// to display the data

function addUser(user){
    fs.readFile("data.json",(error, data)=>{
        if(error){
            console.log(error)
        }
        else{
            //console.log(data.toString())
            data = JSON.parse(data)
            // JSON.parse-returns when reading data  from .json file
            // If obj is present in .json file it will return object and array it will return array
            // data.push("Add something")
            //JSON.stringfy = to convert data from object to data or buffer format to write to the file
            //Check for dusplicate email
            const found = data.find((ele)=> ele.email === user.email)
            if(found) return console.log("email is already reg")
            data.push(user)
            fs.writeFile("data.json", JSON.stringify(data), (err)=>{
                if(err) throw err;
                console.log("user successfully added")
            })
            }
    })
}

function deleteUser(email) {
  fs.readFile("data.json", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      data = JSON.parse(data);
      const del = data.filter((ele) => ele.email !== email);
      fs.writeFile("data.json", JSON.stringify(del), (err) => {
        if (err) throw err;
        console.log("user successfully added");
      });
    }
  });
}

function editUser(Oldemail, newemail) {
  fs.readFile("data.json", (error, data) => {
    if (error) {
      console.log(error);
    } 
    else {
      data = JSON.parse(data);
      const index = data.findIndex((ele) => ele.email === Oldemail);
      if(index === -1) throw "email not found"
      data[index].email = newemail
      fs.writeFile("data.json", JSON.stringify(data), (err) => {
                if (err) throw err;
                console.log("useremail successfully updated");
              });  
    }
  });
}
//Function call

addUser({
    fName: "Prema",
    lName: "Shiva",
    email: "prema1.shiva@ths.com",
    City: "London, ON"
})

deleteUser("prema.shiva1@ths.com");

editUser("prema.shiva1@ths.com", "prema.replace@ths.com");
