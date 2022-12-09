// HOMEWORK PART 1
const dogName = document.getElementById('name');
const kind = document.getElementById('kind');
const speak = document.getElementById('speak');
const btn_1 = document.getElementById('btn-homework-part-one');


// OBJECT LITERAL
let Animal = {
    name: '',
    kind: '',

    // speak: function(message){
    //     console.log(`Dog says: ${message}`)
    // }
}
 
// Another solution to add method in the object when we use object literal
// Object.setPrototypeOf(Animal, Object.create({speak : function(message){
//     console.log(`Dog says: ${message}`)
//   }}));


// btn_1.addEventListener('click', function(){
//     Animal.name = dogName.value;
//     Animal.kind = kind.value
//     Animal.speak(speak.value);
//     console.log(Animal)
// })


// -----------------------------------------------

// SECOND SOLUTION
function AnimalConstructor(name, kind){
    this._name = name;
    this._kind = kind;

    // this.speak = function(message){
    //     console.log(`Dog says: ${message}`);
    // }
}

// Another solution to add method in the object when we use function constructor
AnimalConstructor.prototype.speak = function(message){
    console.log(`Dog says: ${message}`);
}

btn_1.addEventListener('click', function(){
    let dogg1 = new AnimalConstructor(dogName.value, kind.value);
    dogg1.speak(speak.value);
    console.log(dogg1);
})



// HOMEWORK PART 2
function ReadingStatusBook(title,author, statusBook){
    this._title = title;
    this._author = author;
    this.statusBook = statusBook;
    this.status = function(){
        if(statusBook){
            console.log(`Already read ${this._title} by ${this._author}`)
        }else{
            console.log("You still need to read  'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins");
        }
    }
}


const title = document.getElementById('title');
const author = document.getElementById('author');
const readingStatus = document.getElementById('reading-Status');
let btn_2 = document.getElementById('btn-homework-part-two');

btn_2.addEventListener('click', function(){
    let status = false;
    if(readingStatus.checked == true){
        status = true;
    }
    else{
        status = false;
    }
    let book = new ReadingStatusBook(title.value, author.value, status);
    book.status();
})

