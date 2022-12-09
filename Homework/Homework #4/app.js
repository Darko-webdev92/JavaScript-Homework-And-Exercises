// EXERCISE 1
function tellStory(arr){

    return `This is ${arr[0]}. ${arr[0]} is a nice person. They are from ${arr[1]}. They are playing ${arr[2]} all day!`
}

console.log(tellStory(["Darko", "Macedonia", "football"]));



// EXERCISE 2
let arrNumbers = [4,6,7,8,10];

function sum(arr){
    let validateNum = validateNumber(arr);
    if(validateNum === true){
        return "Invalid Array"
    } else{
        let sum = 0;
        for(let i = 0; i< arr.length; i++){
            sum+= arr[i];
        }
        return sum;
    }

}

function validateNumber(arr){
    let IsString = false;
    for(let i = 0; i<arr.length; i++){
        if(typeof arr[i] !== "number"){
            IsString = true;
            break;           
        }
    }
    return IsString;
} 

console.log(sum(arrNumbers));


// EXERCISE 3

let stringArr = ["Hello", "there", "students", "of", "SEDC", "!"];

function arrToString(arr){
    let str = "";
    for(let i = 0; i<arr.length; i++){
        str+=" " + arr[i];
    }

    return str.trimStart().trimEnd();
}

console.log(arrToString(stringArr));


// EXERCISE 4


let str = "";
for(let i = 1; i<=20; i++){
if(i % 2 === 0){
    str+= i + "\n";
}else{
    str+=i + " ";
}
}
console.log(str);


// EXERCISE 5
arr =  [3, 5,11,6, 8, 10, 64];
let min = 0;
let max = 0;
for(let i = 0; i<arr.length; i++){
    if(i === 0){
        min = arr[i];
        max = arr[i];
    }
    if(min > arr[i]){
        min = arr[i];
    }
    if(max < arr[i]){
        max = arr[i];
    }
}
console.log(`Min: ${min}, Max ${max}, Sum ${min + max}`);


// EXERCISE 6
function fullName(firstNames, lastNames){
    let fullName = [];
    for(let i = 0; i<firstNames.length; i++){
    
        fullName.push(`${i+1}.${firstNames[i]} ${lastNames[i]}`);
    }

    return fullName;
}

let firstNames = ["Bob", "Jill"];
let lastNames = ["Gregory", "Wurtz"];
let fullNames = fullName(firstNames, lastNames);
console.log(fullNames);
