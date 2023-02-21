function randomstr(size){
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz0123456789";
  let ran_str = '';
  for (let i = 0; i < size; i++) {
   let index= Math.floor(Math.random() * chars.length)
    ran_str += chars[index];
  }
  //console.log(ran_str)
  return ran_str;  
}
export default randomstr