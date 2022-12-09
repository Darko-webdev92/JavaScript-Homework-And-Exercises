function randomNumber(){
    return Math.floor(Math.random() * 21) -10;
}
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let matrix = [[randomNumber(), randomNumber(), randomNumber()], [randomNumber(), randomNumber(), randomNumber()], [randomNumber(), randomNumber(), randomNumber()]];

function matrix_Sum_Horizontal(arr){

    let results = [];

    for(let i = 0; i < arr.length; i++){    
        let sum = 0;

            for(let j =0; j<arr[i].length; j++){ 

                sum += arr[i][j];
    }
    
    results.push(sum);
}
return results;
}

console.log(matrix_Sum_Horizontal(matrix));


//  |------------|
function matrix_Sum_Vertical(arr){
        let results = [];

    for(let i = 0; i< arr.length; i++){
        let sum = 0;
        for(let j = 0; j < arr[i].length; j++){

            sum += arr[j][i];
        }
    
        results.push(sum);
    }

    return results;
}

console.log(matrix_Sum_Vertical(matrix));


//  |------------|
function matrix_Total_Sum(arr){
    let total = 0;
    
    for(let i = 0; i < arr.length; i++){    
    
            for(let j =0; j<arr[i].length; j++){ 
                    total += arr[i][j];
    }
}
    return total;
}

console.log(matrix_Total_Sum(matrix));

//  |------------|
function difference_Horizontal(arr){

    let results = [];

    for(let i = 0; i < arr.length; i++){
        let difference = arr[i][0];

        for(let j = 1; j < arr[i].length; j++){
    
            difference -= arr[i][j];
        }
        results.push(difference);
    }
    
    return results;
}

console.log(difference_Horizontal(matrix))

//  |------------|
function difference_Vertical(arr){
    let results = [];

    for(let i = 0; i < arr.length; i++ ){
        let difference  = 0;

        for(let j = 0; j < arr[i].length; j++){
            difference -= arr[j][i];
        }
        results.push(difference +(2 * arr[0][i]));
    }
    return results;
}
console.log(difference_Vertical(matrix));

//  |------------|
function difference_Vertical_Total(arr){
    let total = arr.flat().reduce((prev,curr)=> prev - curr);
    return total;
}

console.log(difference_Vertical_Total(matrix));