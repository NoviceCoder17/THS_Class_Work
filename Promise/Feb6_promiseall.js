import axios from "axios";
console.time("block 2");
const sum = [];

function hitAPI(num1, num2) {
  return axios.get(`https://696c-49-205-242-51.ngrok.io/add/${num1}/${num2}`);
}

// this will get response from all the promises
var calls = [];
for (var i = 0, j = 5; i <= 5, j <= 10; i++, j++) {
  calls.push(hitAPI(i, j));
}

//We use promiseall
// Time taken is less than Feb6_await
Promise.all(calls)
  .then((responses) => {
    responses.forEach((res) => {
      console.log(res.data.data);
      sum.push(res.data.data);
    });
    console.log(sum);
    console.timeEnd("block 2");
  })
  .catch((err) => console.log(err));
