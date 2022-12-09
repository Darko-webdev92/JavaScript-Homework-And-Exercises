const save = document.getElementById('save');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const phoneNumber = document.getElementById('phone-number');

let selectedRow = null;
let count = 0;
function Contact(firstName,lastName,phoneNumber){
    this._firstName = firstName;
    this._lastName = lastName;
    this._phoneNumber = phoneNumber;
    this._id = ++count;
}


let phoneBook =[];

save.addEventListener('click', function(e){
    e.preventDefault();

    if(selectedRow === null){
        const newContact = new Contact(firstName.value,lastName.value,phoneNumber.value);
        phoneBook.push(newContact);
        inserNewRow(newContact);
    }else{        
        let getIndexOfAnItemDB = Number(selectedRow.getAttribute('id'));
        updateRecord(phoneBook[getIndexOfAnItemDB-1]);
        updateHTMLRecord();
    }
 
    reset();
   

})


// FUNCTIONS
function inserNewRow(data){
    let table = document.getElementById('tbl-body');

    // CREATING A NEW ROW
    let newRow = table.insertRow(table.length);
    // FIRST NAME CELL
    let firstNameCell = newRow.insertCell(0);
    firstNameCell.appendChild(document.createTextNode(data._firstName));

    // LAST NAME CELL
    let lastNameCell = newRow.insertCell(1);
    lastNameCell.appendChild(document.createTextNode(data._lastName));

    // PHONE NUMBER CELL
    let phoneNumberCell = newRow.insertCell(2);
    phoneNumberCell.appendChild(document.createTextNode(data._phoneNumber));

    // ACTION CELL
    let actionCell = newRow.insertCell(3);

    // edit button
    let editBtn = document.createElement('button');
    editBtn.classList.add('btn', 'btn-warning')
    editBtn.textContent = 'EDIT';

    editBtn.addEventListener('click', function(){
        selectedRow = this.parentElement.parentElement;


        let firstNameCell = selectedRow.firstChild;
        console.log(firstNameCell);
        firstName.value = firstNameCell.textContent;
        selectedRow.cells[0].textContent = firstName.value;

        let lastNameCell = selectedRow.children[1];
        lastName.value = lastNameCell.textContent;
        selectedRow.cells[1].textContent = lastName.value;

        let phoneNumberCell = selectedRow.children[2];
        phoneNumber.value = phoneNumberCell.textContent;
        selectedRow.cells[2].textContent = phoneNumber.value; 

    })


    // delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'mx-2')
    deleteBtn.addEventListener('click', function(){

        
       let row = this.parentElement.parentElement;
       let tr = document.getElementById(row.id);
       console.log(tr);
    for(let i = 0; i<phoneBook.length; i++){
        if(phoneBook[i]._id == tr.getAttribute('id')){
            phoneBook.splice(i,1);
        }
    }
       let table = document.getElementById('tbl-body');
       table.deleteRow(row.rowIndex-1);
       
    })
    deleteBtn.textContent = 'DELETE';
    actionCell.appendChild(editBtn);
    actionCell.appendChild(deleteBtn);
    newRow.setAttribute('id', count);

}

function updateRecord(data){
data._firstName = firstName.value;
data._lastName = lastName.value;
data._phoneNumber = phoneNumber.value;
}
function updateHTMLRecord(){
    selectedRow.cells[0].textContent= phoneBook[selectedRow.getAttribute('id')-1]._firstName;
    selectedRow.cells[1].textContent = phoneBook[selectedRow.getAttribute('id')-1]._lastName;
    selectedRow.cells[2].textContent = phoneBook[selectedRow.getAttribute('id')-1]._phoneNumber;
}
function reset(){
    firstName.value = ''
    lastName.value = ''
    phoneNumber.value = ''
    selectedRow = null;
}
