let rows = Number(prompt("Enter rows"));
let cols = Number(prompt("Enter cols"));

let table = document.createElement('table');
let tableRow;
let tableData
for(let i = 0; i<rows; i++){
tableRow= document.createElement('tr');
table.appendChild(tableRow);
    for(let j= 0; j<cols; j++){
    tableData = document.createElement('td');
    tableData.textContent = `Row-${i+1} col-${j+1}`;
    tableRow.appendChild(tableData);
    }
}

document.body.appendChild(table);