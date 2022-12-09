let ul = document.createElement('ul'); 
let paragraph = document.createElement('p');
let sum = 0;
let arr = [randomNum(), randomNum(),randomNum(), randomNum(),randomNum()];


function randomNum(){
    return Math.floor(Math.random() * 20) + 1;
}


for(let i = 0; i<arr.length; i++){
    let li = document.createElement('li');
    li.textContent = arr[i];
    ul.appendChild(li);
    if(i === arr.length - 1){
        paragraph.textContent += `${arr[i]}`
    }else{
        paragraph.textContent += `${arr[i]} + `; 
    }
    sum+=arr[i];
}


document.body.appendChild(ul);
document.body.appendChild(paragraph);
paragraph.textContent+= `= ${sum}`;






