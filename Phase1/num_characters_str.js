let str = "bbahaabalhaaabblahh";

function CountOfchar(str) {
  let str1 = str.split("");
  //console.log(str1);
  let counts = str1.reduce((ele, i) => {
    ele[i] = (ele[i] || 0) + 1;
    //console.log(ele[i]);
    return ele;
  }, {});
  return counts;
}
console.log(CountOfchar(str));
