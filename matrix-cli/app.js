// IMPORT NPM lib
import chalk from "chalk";
import {questionInt, question} from "readline-sync"

// Importing user defined functions
import { addMatrices, inputMatrix, printString,  mulMatrices,diagonalMatric,const_Mul, transposeMatrix,determinantMatrix } from "./operations.js";

function main(){
    console.log(chalk.green("*************************************************"));
    console.log("\t\tMATRIX CLI \t\t");
    console.log(chalk.green("*************************************************"));

    console.log(`
    1. Press 1 to Find Diagonals of a Matrix\n
    2. Press 2 to Perform Matrix Addition\n
    3. Press 3 to Perform Matrix Multiplication\n
    4. Press 4 to find the determinant of a Matrix\n
    5. Press 5 to multiple a matrix with a constant\n
    6. Press 6 to find the transpose of a Matrix\n
    0. Press 0 to Exit`)
    var inputValue = questionInt("Enter your choice: ")
    switch (inputValue) {
        case 0:
            console.log("Thank you for using our CLI, bye");
            return
            break;
        case 1:
            let matrixD = inputMatrix();
            console.log(diagonalMatric(matrixD))
            break;
        case 2:
            let matrixA = inputMatrix();
            let matrixB = inputMatrix();
            let result = addMatrices(matrixA, matrixB);
            if (!result) {
                break;
            }
            console.log("The Sum of Given Matrices is : ");
            printString(result);
            break;
        case 3:
            let matrixX = inputMatrix();
            let matrixY = inputMatrix();
            console.log(mulMatrices(matrixX,matrixY))  
            break;
        case 4:
            var matrixD1 = inputMatrix()
            console.log(determinantMatrix(matrixD1))
            break;
        case 5:
            let matrixC=inputMatrix()
            let n= questionInt("Enter a constant value you would like to multiply the matrix with");
            console.log(const_Mul(matrixC,n))
            break;
        case 6:
            let matrixT=inputMatrix()
            console.log(transposeMatrix(matrixT))
            break;
        default:
            console.log("Invalid Input");
            break;
    }
    var willContinue = question("Do you want to Continue? (Y/N)");
    if( willContinue == 'y' || willContinue == 'Y' || willContinue == "yes" || willContinue == "Yes"){
        main()
    }else{
        console.log(chalk.bgGreenBright("Thank you for Using our application for Matrices, See You Again!"))
    }
}

main()