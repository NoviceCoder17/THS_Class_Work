import chalk from "chalk";
 function determinantMatrix(matrix){
    if(matrix.length !== matrix[0].length){
        console.log(chalk.redBright("Cannot find the determinant of non-square matrix"))
        return
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

 function minor(matrix , row , col){
    var subMatrix = [];
    for(var i = 0 ; i< matrix.length ; i++){
        if( i == row){
            continue;
        }
        subMatrix[i] = []
        for(var j = 0 ; j < matrix[i].length ; j++){
            if(j == col){
                continue;
            }
            subMatrix[i].push(matrix[i][j])
        }
    }
    subMatrix
 }

 determinantMatrix([1,1,2],[3,4,5],[6,7,8])