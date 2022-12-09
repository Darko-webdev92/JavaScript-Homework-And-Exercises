let Fname = document.getElementById("name");
let grade = document.getElementById("grade");
let btn = document.getElementById("btn");
let res = document.getElementById("res");
let average = document.getElementById('average');
let paragaprh = document.getElementById("paragraph");


let firstName = [];
let grades = [];

btn.addEventListener("click", (e)=>{
    e.preventDefault();
firstName.push(Fname.value);
grades.push(grade.value);

let li = document.createElement('li');

li.textContent = `${Fname.value} ${grade.value}`
Fname.value = ''
grade.value = '';
res.appendChild(li);

})

average.addEventListener('click', ()=>{
    let sum = 0;
    for(let i = 0; i<grades.length; i++){
        
        sum+= Number(grades[i]);
    }
    let averageGrade =  sum / grades.length;
   paragaprh.textContent = `The average grade is ${averageGrade}`;
})