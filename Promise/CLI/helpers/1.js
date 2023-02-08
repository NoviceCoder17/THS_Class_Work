//import { resolveCaa } from 'dns'
import fs, { read } from "fs";

function readFile(Filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(Filename, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

//Converting to promise
readFile("./data.txt")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// To convert to async

async function main (){
    try{
        const data = await readFile('./data.txt')
        data = JSON.parse(data)
        console.log(data)
    }
    catch(error){
       // if(err) throw err
    }
}
main()