import chalk from "chalk"
import {questionInt} from "readline-sync"
function inputMatrix(){
    var rows = questionInt(`Enter the no of rows: `)
    var cols = questionInt(`Enter the no of cols: `)
    var matArr = new Array(rows)
    for(var i =0; i<rows; i++){
        matArr[i]= new Array(cols)
        for(var j =0; j< cols ; j++){
            matArr[i][j]= questionInt(`Enter the elements at ${i} ${j}:`)           
        }           
    }
    return matArr   
}
function addMatrices(matrixA, matrixB){
    if(matrixA.length !== matrixB.length || matrixA[0].length != matrixB[0].length){
        console.log(`Matrice are not equal`)
        return 
    }  
    let matrixC = new Array(matrixA.length)
    for(var i =0; i<matrixA.length; i++){
        matrixC[i]= new Array(matrixA[0].length)
        for(var j =0; j< matrixA[0].length ; j++){
            matrixC[i][j]=  matrixA[i][j] + matrixB[i][j]        
        }           
    }
    return matrixC
}

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

 function mulMatrices(matrixA, matrixB){
    let matrixC = new Array(matrixA.length)
    for(var i =0; i<matrixA.length; i++){
        matrixC[i]= new Array(matrixB[i].length)
        for(var j =0; j<matrixA.length; j++){
            matrixC[i][j]=0
            
            for(var k =0; k<matrixB.length; k++){
                matrixC[i][j] +=  matrixA[i][k] * matrixB[k][j]
        }     
        }    
    }
    return matrixC  
}

function diagonalMatric(matrix){ 
    var str = ''
    for (var i = 0; i < matrix.length; i++) {
       for (var j = 0; j < matrix[i].length; j++) {
        if(i === j){
          str +=  chalk.blue(matrix[i][j])+ " "
       }  
       else{
          str +=  chalk.red(matrix[i][j]) + " "
       }
    }
    str +="\n"
   
 }
 return str
 }

function const_Mul(matrix, n){
    for (var i = 0; i < matrix.length; i++) {
       for (var j = 0; j < matrix[0].length; j++) {
            matrix[i][j]= matrix[i][j]*n
       }  
    }
    return matrix
 }

 function transposeMatrix(matrix){
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


 function determinantMatrix(matrix){ 
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
// Add more functions here 
export {inputMatrix, printString, addMatrices, mulMatrices,diagonalMatric,const_Mul, transposeMatrix, determinantMatrix, minor}
