let matrix =[[1,0,0], [0, 1, 0], [0, 0, 1]];  
function identity_Matrix(array){

    for (let i = 0; i < array.length; i++) 
    {
     for (let j = 0; j < array.length; j++)
      {
       if (array[i][j] !== 1 && i === j || array[i][j] && i !== j)
       {
         return false;
       }
     }  
   }
   return true;
}


console.log(identity_Matrix(matrix));
