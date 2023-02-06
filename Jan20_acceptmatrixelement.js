import {questionInt} from 'readline-sync'
//import obj from "./Jan19_2Darrays.js"
function inputMatrix(){
    var rows = questionInt(`Enter the no of rows: `)
    var cols = questionInt(`Enter the no of cols: `)

    var matArr = new Array(rows)
    for(var i =0; i<rows; i++){
        matArr[i]= new Array(cols)
        //console.log(matArr)
        for(var j =0; j< cols ; j++){
            matArr[i][j]= questionInt(`Enter the elements at ${i} ${j}:`)           
        }           
    }
    return matArr   
}

console.log(inputMatrix())

function printString(matrix) {
    var str = '';
 
    for (var i = 0; i < matrix.length; i++) {
       for (var j = 0; j < matrix[i].length; j++) {
          str = str + matrix[i][j] + ','
       }
    }
    console.log(str)
 }
//printString(arr)


// var matrix = inputMatrix()
// obj.printString(matrix)

export default inputMatrix

