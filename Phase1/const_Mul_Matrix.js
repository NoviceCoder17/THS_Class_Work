function const_Mul(matrix, n){
    for (var i = 0; i < matrix.length; i++) {
       for (var j = 0; j < matrix[0].length; j++) {
            matrix[i][j]= matrix[i][j]*n
       }  
    }
    return matrix
 }

 var arr = [
 [1,1,2],
 [3,4,5],
 [6,7,8]]
console.log(const_Mul(arr,8))