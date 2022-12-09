let addBtn = document.getElementById('add');
let list = document.getElementById('list');
let count = 0;
let toDos = [];
function ToDo(name){
    this._name = name;
    this._isDone = false;
}

addBtn.addEventListener('click', function(e){
    e.preventDefault();
    let task = document.getElementById('task');
    if(task.value.trim() === ''){
        task.value = '';
        return;
    }else{
        let todo = new ToDo(task.value);
        toDos.push(todo);
        let li = document.createElement('li');
        li.textContent = task.value;
        li.setAttribute('id', ++count)
        // li.setAttribute('class','li');
        // checkbox
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        li.appendChild(checkbox);

        checkbox.addEventListener('click', function(e){
            
        li.classList.toggle('li');
        console.log(checkbox.parentElement.id);
      
          todo._isDone = checkbox.checked;      
          console.log(checkbox.checked);

        })
        list.appendChild(li);
        task.value = '';

    }

})
