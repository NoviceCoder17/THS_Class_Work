import { questionInt } from 'readline-sync';
var distAB, distBC, distCA
let x1 = questionInt("Enter the x-coordinate of the first point: ");
let y1 = questionInt("Enter the y-coordinate of the first point: ");
let x2 = questionInt("Enter the x-coordinate of the second point: ");
let y2 = questionInt("Enter the y-coordinate of the second point: ");
let x3 = questionInt("Enter the x-coordinate of the third point: ");
let y3 = questionInt("Enter the y-coordinate of the third point: ");
console.log({ x1, x2, x3 })
console.log({ y1, y2, y3 })
//calculate an area of triangle
function checkInputs(x1, x2, x3, y1, y2, y3) {
    let triangle = x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)
    console.log(triangle)
    if (triangle == 0) {
        console.log(`Does not Forms a triangle`)
    }
    else {
        console.log(`Forms a triangle`)
    }
}

function sideTriangle(a, b, c) {
    if (a == b == c) {
        console.log(`Equilateral triangle`)
    }
    else if (a == b || b == c || c == a) {
        console.log(`Isoceles triangle`)
    }
    else {
        console.log(`Scalene triangle`)
    }
}
function findLengths(x1, x2, x3, y1, y2, y3) {
    distAB = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    distAB = Math.abs((distAB))
    console.log(`Distance AB: ${distAB}`)

    distBC = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2)
    distBC = Math.abs((distBC))
    console.log(`Distance BC: ${distBC}`)


    distCA = Math.sqrt((x3 - x1) ** 2 + (y3 - y1) ** 2)
    distCA = Math.abs((distCA))
    console.log(`Distance CA: ${distCA}`)
}

function findAngle(a, b, c) {
    var alpha = (b ** 2 + c ** 2 - a ** 2) / (2 * b * c)
    // console.log(alpha)
    alpha = Math.acos(alpha) * 180 / Math.PI
    console.log(`Alpha: ${alpha}`)

    var beta = (c ** 2 + a ** 2 - b ** 2) / (2 * c * a)
    beta = Math.acos(beta) * 180 / Math.PI
    console.log(`Beta: ${beta}`)

    var gamma = (a ** 2 + b ** 2 - c ** 2) / (2 * a * b)
    gamma = Math.acos(gamma) * 180 / Math.PI
    console.log(`Gamma: ${gamma}`)

    if (alpha < 90 || gamma < 90 || beta < 90) {
        console.log(`Acute angle triangle`)
    }
    else if (alpha == 90 || beta == 90 || gamma == 90) {
        console.log(`Right angle triangle`)
    }
    else {
        console.log(`Obtuse angle triangle`)
    }
}
checkInputs(x1, x2, x3, y1, y2, y3)
findLengths(x1, x2, x3, y1, y2, y3)
sideTriangle(distAB, distBC, distCA)
var A = distBC
var B = distCA
var C = distAB
findAngle(A, B, C)
