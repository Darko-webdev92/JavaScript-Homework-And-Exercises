let num = 10;
let str = 'String';

let numInput = document.getElementById('num');;
let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    if(Number(numInput.value) > 13){
        let res = (Number(numInput.value) - 13) * 2;
        console.log(res);
    } else{
        let res = Number(numInput.value) - 13;
        console.log(res);
    }
})