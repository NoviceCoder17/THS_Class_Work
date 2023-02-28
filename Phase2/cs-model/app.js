
// app.use(express.json())
// // Parses req.body to JSON format
// // Its a middleware
// // Use JSON format

// app.get("/xyz", (req, res)=>{
//     res.send("Hey")
// })
// // app.get("/", (req,res)=>{
// //    // console.log("working")
// //     // console.log("really working")
// //     // console.log(req) // Metadata received - note: headers need to be tracked
// //     // console.log(req.headers)
// //     // console.log(res)
// //     res.send("Hello from server")// if html file is sent then itll be rendered
// //     // // Cannot send responde twice EVER
// //     // console.log(req.body)
// //     // console.log(req.headers)
// //     // console.log(req.method)
// // })
// // "/-slash is the home route"
// // get is a http methods
// // Post
// // Put(Edit large part of information)
// // patch
// // delete
// // Browser url bar can only use get method
// // get method request does not have a body
// // Google search is a get request- query params{key:value}
// // request.params is diff from request.query
// // Path variable(unique values):user_id
// // 500 internal server error


// app.listen(port,()=>{
// console.log("server has started at, ", port)
// })


import express from 'express'
import axios from 'axios'
const app = express()
const port = 5000

app.use(express.json()) // middleware

// //This is to set endpoints
// app.get('/', (req, res) => {
// res.send('Hello World!')
// //   // //You cannot response twice
//  // GET does not have body
//   console.log(req.body)
//   console.log(req.headers)
//   console.log(req.method)
// })

// app.post('/',(req,res)=>{
//   console.log(req.body)
//   // console.log("Hello post")
// })

const cb1 = (req,res,next)=>{
 
  //console.log("whatsup")
  req.a = 34
  next() //transfer control to next middleware
 
}
//Req,res,next= middleware function
app.get("/",cb1,(req,res)=>{
  console.log("hello")
  console.log(req.a)
})

// app.get("/query",(req,res)=>{
//   console.log(req.query)
// })
//Request can be made using 1. browser ip:port 2. From test.js using axios 3. Postman
//Browsers can only make get request

// To get specific userid we can use path variables
// app.get("/:user_id",async(req,res)=>{
//   try{
//     let result = await axios.get(`https://apid.github.com/users/${req.params.user_id}`)
//    // console.log(result.data)
//     res.status(200).json({"success":result.data})  // shown in postman

//   }
//   catch(error){
//     console.log(error)
//     res.status(500).json({error :"system error"})  // shown in postman
//   }
// })
app.listen(port, () => {
  console.log(`Server has started at  ${port}`)
})

