var arr = [ [[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]], [[5, 6, 10], [10, 20, 30]], [[60,
    70, 90], [1000, 200, 250]] ]
    console.log(arr)
    
function printString(matrix) {
    var str = '';
 
    for (var i = 0; i < matrix.length; i++) {
       for (var j = 0; j < matrix[0].length; j++) {
         str = str + matrix[i][j] + ','
        // matrix[i][j]=matrix[i][j]
       }
    }
    //console.log(matrix)
    var Arr1D = str.slice(0,str.length-1)
    console.log(Arr1D.split(",").map(Number))
 }
printString(arr)
