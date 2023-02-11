export { encode64, decode64 };
function encode64(input) {
  let arr = input.split("");
  let arr2 = arr.map((ele) => {
    return ele.charCodeAt().toString(2).padStart(8, 0);
  });
  let str = arr2.join("");
  let arr3 = str.split("");
  //console.log(arr3);
  let finalArr = [];
  while (arr3.length != 0) {
    let str2 = arr3.splice(0, 6).join("");
    finalArr.push(str2);
  }
  console.log(finalArr);
  let size = finalArr[finalArr.length - 1].length;
  if (finalArr[finalArr.length - 1].length < 6) {
    finalArr[finalArr.length - 1] = finalArr[finalArr.length - 1].padEnd(6, 0);
  }
  let size2 = finalArr[finalArr.length - 1].length;
  let zeroCount = (size2 - size) / 2;
  let arr4 = finalArr.map((ele) => {
    return parseInt(ele, 2);
  });
  //  console.log(zeroCount)
  let base64 =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let result = arr4.map((ele) => {
    return base64[ele];
  });
  let finalResult = result.join("");
  while (zeroCount != 0) {
    finalResult += "=";
    zeroCount--;
  }
  //console.log(finalResult);
  return finalResult
}

function decode64(str) {
  const reg = new RegExp(/^[A-Za-z0-9\+\/]+[=]{0,2}?$/);
  if (!reg.test(str)) {
    console.log("Base64 String is invalid");
    return;
  }

  let arr = str.split("");
  let base64Dict =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let count = 0;
  while (arr[arr.length - 1] == "=") {
    arr.pop();
    count++;
  }
  let indexB64 = arr.map((ele) => {
    return base64Dict.indexOf(ele);
  });
  let stringEqu = indexB64.map((ele) => {
    return ele.toString(2).padStart(6, 0);
  });
  let str2 = stringEqu.join("");
  let arr2 = str2.split("");

  while (count != 0) {
    arr2.pop();
    arr2.pop();
    count--;
  }
  let finArr = [];
  while (arr2.length != 0) {
    let joinArr = arr2.splice(0, 8).join("");
    finArr.push(joinArr);
  }
  let decEqu = finArr.map((ele) => {
    return parseInt(ele, 2);
  });
  let finalArr2 = decEqu.map((ele) => {
    return String.fromCharCode(ele);
  });
  let result = finalArr2.join("");
  return result
}
