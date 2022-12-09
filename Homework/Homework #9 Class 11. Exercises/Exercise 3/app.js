
let numInput = document.getElementById('num');;
let btn = document.getElementById('btn');
let output = document.getElementById('output');


btn.addEventListener('click', function(){
    output.textContent = ''
    if(numInput.value !== ''){
        if(Number(numInput.value) > 13){
            let res = (Number(numInput.value) - 13) * 2;
            output.textContent = `Input: ${numInput.value} ==> Output: ${res}`;
        } else{
            let res = Number(numInput.value) - 13;
            output.textContent = `Input: ${numInput.value} ==> Output: ${res}`;
        }
    }else{
        alert('Please enter a number')
    }

})