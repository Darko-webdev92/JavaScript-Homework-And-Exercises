let hotel = {
    name: "Aleksandar Palace",
    rooms : 100,
    booked: 55,
    gym: true,
    roomTypes: ['twin','double', 'suite'],
    checkAvaiability: function(){
        return this.rooms - this.booked;
    }
}

console.log(hotel.name);
console.log(hotel.checkAvaiability());


const person = {
    firstName: "Darko",
    lastName: "Angelovski",
    age: 29,
    student: true,
    country: "Macedonia"
}

person.firstName = "Vlade",
person.lastName = "Tasevski";
person.student = false;

console.log(person);


person['firstName'] = "Vlatko";

console.log(person);

let person1 = new Object();

person1.name = "Darko";
console.log(person1);

const trainer = {
    name: "Stefan",
    lastName: "Stefanovski",
    academy: "SEDC",
    lecture: "Objects"
}

delete trainer.lecture;
trainer.age = 44;
trainer.getFullName = function(){
    return `${this.name} ${this.lastName}`
} 
console.log(trainer);
console.log(trainer.getFullName());

var width = 600;

function showWidth(){
    console.log(this.one);
}

// console.log(showWidth());
// showWidth();

function Car(model,color,year,fuelConsumption){
    this._model = model;
    this._color = color;
    this._year = year;
    this._fuelConsumption = fuelConsumption;
    this.calculate = function(distance){  
        return distance * (this._fuelConsumption  / 100);
    }
}   

let mercedes = new Car('e-270', 'black', 2015, 6);
console.log(mercedes.calculate(110))