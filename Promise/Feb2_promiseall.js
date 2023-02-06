import axios from "axios";
console.time("block 2");
const githubUsers = [
  "TPAteeq",
  "darkRose173",
  "nthukral18",
  "sailaja15",
  "Abdul535",
  "aniruddhamaiti83",
  "Novicecoder17",
];
var userData = [];
function hitGithub(username) {
  return axios.get(`https://api.github.com/users/${username}`, {
    auth: {
      username: "Novicecoder17",
      password: "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",
    },
  });
}
//Promise all
//Below returns a promise
// Promise all returns data in order
const users = githubUsers.map((ele) => hitGithub(ele));
console.log(users);
Promise.all(users)
  .then((res) => {
    console.log(res.length)
    res.forEach((ele) => {
      let Obj = {};
      Obj.name = ele.data.name;
      Obj.followers = ele.data.followers;
      Obj.following = ele.data.following;
      userData.push(Obj);
    });
    console.log(userData);
    console.timeEnd("block 2");
  })
  .catch((err) => {
    console.log(err);
  });
