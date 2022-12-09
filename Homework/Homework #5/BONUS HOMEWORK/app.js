let ol = document.createElement('ol');
let recipeName = window.prompt('Recipe name');
let numOfIgredients = 0;
let isNum = false;
let igredients;
let recipeTitle = document.createElement('h1');
recipeTitle.textContent = recipeName;
document.body.appendChild(recipeTitle);
document.body.appendChild(ol);


// TABLE 
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
let tr = document.createElement('tr');
let th = document.createElement('th');
let td = document.createElement('td');
thead.appendChild(tr);
th.textContent = 'Number of ingredient'
tr.appendChild(th)
th = document.createElement('th');
th.textContent = 'Ingredient'
tr.appendChild(th);
table.appendChild(thead);

table.appendChild(tbody);
document.body.appendChild(table);



do{
    numOfIgredients = Number(window.prompt(`How many ingredients do you need for the recipe`));
    if(!isNaN(numOfIgredients)){
        isNum = true;
        igredients = new Array(numOfIgredients);
    }
}
while(isNum === false || numOfIgredients == 0);



for(let i = 0; i<igredients.length; i++){
    igredients[i] = window.prompt(`Ingredient num ${i+1}`);
    let li = document.createElement('li');
    li.textContent = igredients[i];
    ol.appendChild(li); 
    tr = document.createElement('tr');
    tbody.appendChild(tr);
    let numOfIgredient = document.createElement('td');
    numOfIgredient.textContent = i+1;
    tbody.appendChild(numOfIgredient);
    let ingredient = document.createElement('td');
    ingredient.textContent =  igredients[i];
    tbody.appendChild(ingredient);
}