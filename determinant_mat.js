
function determinantMatrix(matrix){ 
    console.log(matrix.length)
    console.log(matrix[0].length)
    if(matrix.length !== matrix[0].length){
        console.log("Cannot find the determinant of non-square matrix")
        return 0
    }
    if(matrix.length == 2){
       return (matrix[0][0] * matrix[1][1] - matrix[0][1]*matrix[1][0])
    }  
    var det = 0;
    for(var i =0 ; i< matrix[0].length ; i++){
        det += Math.pow(-1, i) * matrix[0][i] * determinantMatrix(minor(matrix , 0 , i))
    }
    return det
 }

 function minor(matrix1 , row , col){
    var subMatrix = [];
    for(let i = 0 ; i< matrix1.length ; i++){
        if( i == row){
            continue;
        }
       subMatrix[i] = []
        for(let j = 0 ; j < matrix1[i].length ; j++){
            if(j == col){
                continue;
            }          
            subMatrix[i].push(matrix1[i][j])       
        }
    }
    var subm = subMatrix.splice(1,)
    return subm
 }



