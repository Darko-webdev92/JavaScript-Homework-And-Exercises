
let numInput1 = document.getElementById('num1');
let numInput2 = document.getElementById('num2');
let btn = document.getElementById('btn');
let output = document.getElementById('output');


btn.addEventListener('click', function(){
    output.textContent = ''
    if(Number(numInput1.value) < 0 ||  Number(numInput2.value) < 0 ){
        alert('NEGATIVE NUMBER IS NOT ALLOWED');
    }else{
        let res1 = 0;
        let res2 = 0;
        if(Number(numInput1.value) > 100 && Number(numInput2.value) < 100){
            res1 = Number(numInput1.value) - 100;
            res2 = 100 - Number(numInput2.value);

        }else if(Number(numInput2.value) > 100 &&  Number(numInput1.value) < 100){
            res2 = Number(numInput2.value) - 100;
            res1 = 100 - Number(numInput1.value);
        }else if(Number(numInput2.value) > 100  &&  Number(numInput1.value) > 100){
            res2 = Number(numInput2.value) - 100;
            res1 = Number(numInput1.value) - 100;
        }else {
            res1 = 100 - Number(numInput1.value);
            res2 = 100 - Number(numInput2.value);
        }

        if(res1 > res2 && res2 !== 100){
            output.textContent = `${numInput2.value} is closer to 100`;
            console.log(`${numInput2.value} is closer to 100`);

        } else if(res2 > res1 && res1 !== 100){
            output.textContent = `${numInput1.value} is closer to 100`;
            console.log(`${numInput1.value} is closer to 100`)
        }else if(res1 === 100){
            output.textContent = `${res1} is closer to 100`;
        console.log(`${res1} is closer to 100`)
        }else if(res2 === 100){
            output.textContent = `${res2} is closer to 100`;
            console.log(`${res2} is closer to 100`)
        }else if(res1 === res2)
        output.textContent = `${numInput1.value} and  ${numInput2.value} are approximately equal to 100`;
            console.log(`${numInput1.value} and  ${numInput2.value} are approximately equal to 100`);
        }
    }
    
)