let salary = document.querySelector('#salary');


let BobSalary = 1000;
let apartment = 375;
let bills = 250;
let anualSalary = false;

if(anualSalary){
    let totalAmountLeft = ((BobSalary) - (apartment) - (bills))  * 12;
    salary.textContent = totalAmountLeft;
}else{
    let totalAmountLeft = BobSalary - apartment - bills;
    salary.textContent = totalAmountLeft;
}

