// let arr = ['',undefined,null,NaN,"", 10,'sfsfsd',false,true];
let arr = [];
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';




function generateRandomString(length){
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function generateRandomNumber(){

    return Math.floor(Math.random() * 11) + 1;
   }

function generateRandomType(){
    let item = null;
    let randomNumber = generateRandomNumber();
    switch(randomNumber){
        case 1:
            // Empty string;
            item = ''
        break;
        case 2:
            // random String
            item = generateRandomString(generateRandomNumber());
        break;
        case 3:
            // NaN
            item = NaN;
        break;
        case 4:
            // UNDEFINED
            item = undefined;
        break;
        case 5:
            // OBJECT
            item = {};
        break;
        case 6:
            item = [];
        break;
        case 7:
            // TRUE 
            item = true;
        break;
        case 8:
            // FALSE
            item = false;
        break;
        case 9:
            // FALSE
            item = 0;
        break;
        case 9:
            // FALSE
            item = -0;
        break;
        case 10:
            // FALSE
            item = generateRandomNumber();
        break;
        
    }
    return item;
}

for(let i = 0; i< 15; i++){
    arr.push(generateRandomType());
  
}


function DeleteFalsyArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0 || Number.isNaN(arr[i]) || arr[i] === null || arr[i] === false || arr[i] === "" || arr[i] === undefined) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}


console.log(arr);
console.log(DeleteFalsyArrayItems(arr));