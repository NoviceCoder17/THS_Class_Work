function randomArrNoDuplicates(min, max) {
    var arr = []
    if (max - min == 9) {
        while (arr.length < 10) {
            var randNum = (Math.floor(Math.random() * (max - min + 1)) + min)
            if (!arr.includes(randNum)) {
                arr.push(randNum)
            }
        }
        return arr
    }
    else {
        console.log("Enter such that the range is 1-10")
    }
}
console.log(randomArrNoDuplicates(100, 109))