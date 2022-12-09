
let display1El = document.getElementById("display-1");
let display2El = document.getElementById("display-2");
let clear = document.getElementById('clear');
let numbers = document.querySelectorAll('.number');
let operations = document.querySelectorAll(".operation");
let equal = document.querySelector('.equal');
let decimal = false;
let dis1Num = "";
let dis2Num = "";
let result = null;

let lastOperation = '';


numbers.forEach(num =>{
    num.addEventListener('click', (e)=>{
        // Check if number is decimal.
        if(e.target.value === '.' && !decimal){
            decimal = true;
        }else if(e.target.value === '.' &&  decimal){
            return;
        }
        
        dis2Num += e.target.innerText;
        display2El.textContent = dis2Num;

        
    })
})

operations.forEach(operation =>{
    operation.addEventListener('click' , e =>{
        if(!dis2Num) return;
        decimal = false;
        const operationName = e.target.value;
        if(dis1Num && dis2Num && lastOperation){
            mathOperation();
        }else{
         result = Number(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
    })
})

function clearVar(name = ''){
    dis1Num += dis2Num + " " + name + " ";
    display1El.innerText = dis1Num;
    console.log(display1El);
    display2El.innerText = " ";
    console.log(display2El)
    dis2Num = " ";
}

function mathOperation(){
    if (lastOperation === "X") {
        result = Number(result) * Number(dis2Num);
      } else if (lastOperation === "+") {
        result = Number(result) + Number(dis2Num);
      } else if (lastOperation === "-") {
        result = Number(result) - Number(dis2Num);
      } else if (lastOperation === "/") {
        result = Number(result) / Number(dis2Num);
      }
}

equal.addEventListener('click',()=>{
        if (!dis2Num || !dis1Num) return;
        decimal = false;
        mathOperation();
        if(isFinite(result)){
            // clearVar();
         
            display1El.innerText = result;
            display2El.innerText = ""

            dis2Num = result;
            dis1Num = "";
        }else{
            display2El.textContent = "0";
            display1El.textContent = "";
             dis1Num = "";
             dis2Num = "";
        }

})

clear.addEventListener('click', ()=>{
decimal = false;
display2El.textContent = "0";
display1El.textContent = "";
 dis1Num = "";
 dis2Num = "";
})