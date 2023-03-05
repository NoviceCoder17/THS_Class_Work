function transposeMatrix(matrix){
    //var diagonalMat = [];  
    let matrixC = []
    for (var i = 0; i < matrix[0].length; i++) {
      const matCol=[]
       for (var j = 0; j < matrix.length; j++) {
             matCol.push(matrix[j][i])
       }
       matrixC.push(matCol)
    }
    return matrixC
 }

 var arr = [[1,1,2],[3,4,5],[6,7,8]]
//console.log(arr.length)
console.log(transposeMatrix(arr))