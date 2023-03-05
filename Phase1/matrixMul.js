// import printString from "./Jan19_2Darrays.js"
// import inputMatrix from "./Jan20_acceptmatrixelement.js"


// var matrixA = inputMatrix()
// //printString(matrixA)
// var matrixB = inputMatrix()
// //printString(matrixB)

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
console.log(mulMatrices([[1, 2, 3],[4, 5, 6]],[[7,8],[9,10],[11,12]]))