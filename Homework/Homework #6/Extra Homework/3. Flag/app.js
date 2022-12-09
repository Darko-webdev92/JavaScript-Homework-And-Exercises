
let flag = [[ "*", "*", "*", "*", "*" ], [ "*", "+", "+", "+", "*" ], [ "*", "+", "+", "+", "*" ], [ "*", "+", "+", "+", "*" ], [ "*", "*", "*", "*", "*" ]];

let temp = '';
for(let i = 0; i<flag.length; i++){

    for(let j = 0; j<flag[i].length; j++){
        temp += flag[i][j];
    }   
    temp+="\n"
}   
console.log(temp);
