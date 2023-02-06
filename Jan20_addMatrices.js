import printString from "./Jan19_2Darrays.js"
import inputMatrix from "./Jan20_acceptmatrixelement.js"


var matrixA = inputMatrix()
//printString(matrixA)
var matrixB = inputMatrix()
//printString(matrixB)

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

var addedMatrix = addMatrices(matrixA,matrixB)
console.log(addedMatrix)

