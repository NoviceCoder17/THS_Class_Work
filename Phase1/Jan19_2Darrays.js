// Matrix= Array or number in rows and column
//1D array
//Vectors are 1D
// var matrix = [[1,2],[3,4]]
// console.log(matrix[0][0])
// console.log(matrix[0][1])
// console.log(matrix[1][0])
// console.log(matrix[1][1])

// var matrix1 = [ [[1,2],[3,4]], [[1,2],[3,4]] ]


//Matrix of order 3
// var dim3 = [[1, 2, 3], [2, 4, 8], [10, 20, 30]]
// //console.log(dim3[0][0][0])
// //[1 2 3]
// //[2 4 8]
// //[10 20 30]


// var dim3 = [[1, 2, 3], [2, 4, 8], [10, 20, 30]]

// function printString(matrix){
//     var str = '';
//     for (var row = 0; row< matrix.length; row++) {
//         //console.log(dim3[row])
//         for (var col = 0; col < matrix[row].length; col++) {
//             str = str + matrix[row][col] + ' '// space between and gives in a length
//         }
//         str += "\n"      // This gives a new line
//     }
//     console.log(str)
// }
//chalk.js

function printString(matrix) {
    var str = '';
 
    for (var i = 0; i < matrix.length; i++) {
       for (var j = 0; j < matrix[i].length; j++) {
          str = str + matrix[i][j] + ' '
       }
       str += "\n"
    }
    console.log(str);
 }

export default{
    printString
}