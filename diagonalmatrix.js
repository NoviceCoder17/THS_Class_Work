
import chalk from "chalk";
let arr=[
   [1, 2, 4, 2],
   [4, 5, 3, 5],
   [5, 2, 6, 4],
   [8, 2, 9, 3]]

   function diagonalMatric(matrix){ 
      var str = ''
      for (var i = 0; i < matrix.length; i++) {
         for (var j = 0; j < matrix[i].length; j++) {
          if(i === j){
            str +=  chalk.blue(matrix[i][j])
         }  
         else{
            str +=  chalk.red(matrix[i][j])
         }
      }
      str +="\n"
     
   }
   return str
   }
   console.log(diagonalMatric(arr))