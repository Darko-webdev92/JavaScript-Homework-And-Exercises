function randomNumber(){
    return Math.floor(Math.random() * 11);
}
// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let matrix = [[randomNumber(), randomNumber(), randomNumber()], [randomNumber(), randomNumber(), randomNumber()], [randomNumber(), randomNumber(), randomNumber()]];

// --------
function  lower_Triangular_Matrix_Sum(arr){
    let sum = 0;
for(let i = 0; i<arr.length; i++){
    
    for(let j = 0; j<=i; j++){
        sum+=arr[i][j]
    }
  
}
return sum;
}

console.log(lower_Triangular_Matrix_Sum(matrix));

// --------
function lower_Triangular_Matrix_Product(arr){
    let sum = 1;
for(let i = 0; i<arr.length; i++){
    
    for(let j = 0; j<=i; j++){
        sum *=arr[i][j]
    }
  
}
return sum;
}

console.log(lower_Triangular_Matrix_Product(matrix));

// --------
function upper_Triangular_Matrix(arr){
    let sum = 0
    for(let i = 0; i<arr.length; i++){
        for(let j = i; j<arr[i].length; j++){
            sum+=arr[i][j]
        }   
    }
    return sum;
}

console.log(upper_Triangular_Matrix(matrix));

// --------
function upper_Triangular_Matrix_Product(arr){
    let sum = 1;

    for(let i = 0; i<arr.length; i++){
        for(let j = i; j<arr[i].length; j++){
            sum *=arr[i][j]
        }   
    }
    return sum;
}

console.log(upper_Triangular_Matrix_Product(matrix));