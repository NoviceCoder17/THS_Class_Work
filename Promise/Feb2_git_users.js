import axios from "axios";
var userData = []

const githubUsers = [
  "TPAteeq",
  "darkRose173",
  "nthukral18",
  "sailaja15",
  "Abdul535",
  "aniruddhamaiti83",
  "Novicecoder17",
];

function hitGithub(username){
    return axios.get(`https://api.github.com/users/${username}`)
}

githubUsers.forEach((ele) => {
  hitGithub(ele)
    .then((res) => {
        let Obj = {}
        Obj.name = res.data.name
        Obj.followers = res.data.followers
        Obj.following = res.data.following
        userData.push(Obj)
    })
    .catch((err) => {
      console.log(err);
    });
});

console.log(userData)
// This return [] because its blicking and promise is 
// non blocking, so the push is happening later
// MAke sure all of them are hit- use promiseall

