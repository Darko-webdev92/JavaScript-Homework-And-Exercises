let arr = [10,30,50, 1,3,6,7,10,10];

// let max = Math.max(...arr);
// console.log(max);

let max = 0;
let counter = 0;
while(counter < arr.length){
    if(arr[counter]> max)
    {
        max = arr[counter];
    }
    counter++;
}

let arr = [10,30,50, 1,3,6,7,10,10];
function findNumber(number, array){
let occurence = 0;
for(let i = 0; i< array.length; i++){
    if(number == array[i]){
        occurence++;
    }
}
return occurence;
}

console.log(findNumber(10, arr));


