var yearOfBirth = Number(window.prompt('Enter your Birth year'));

if(yearOfBirth === 0 || typeof yearOfBirth != 'number' || Number.isNaN(yearOfBirth)){
alert('please enter valid year');
}else if(Number.isInteger(yearOfBirth) == false){
    alert('please enter whole numbers');
}else{
    var formulaForChineseZodiac =  (yearOfBirth - 4) % 12; 
    console.log(formulaForChineseZodiac)
    if(formulaForChineseZodiac === 0){
        console.log(`You are a: Rat 🐀`);
    } else if(formulaForChineseZodiac === 1 || formulaForChineseZodiac === -1){
        console.log(`You are a: Ox 🐂`);
    } else if(formulaForChineseZodiac === 2 || formulaForChineseZodiac === -2){
        console.log(`You are a: Tiger 🐯` );
    }else if(formulaForChineseZodiac === 3 || formulaForChineseZodiac === -3){
        console.log(`You are a: Rabbit 🐰`) 
    }else if(formulaForChineseZodiac === 4 || formulaForChineseZodiac === -4){
        console.log(`You are a: Dragon 🐉`);
    } else if(formulaForChineseZodiac === 5){
        console.log(`you are a: Snake 🐍`);
    }else if(formulaForChineseZodiac === 6){
        console.log(`You are a: Horse 🐴`);
    }else if(formulaForChineseZodiac === 7){
        console.log(`You are a: Goat 🐐`);
    } else if(formulaForChineseZodiac === 8){
        console.log(`You are a: Monkey 🐒`);
    } else if(formulaForChineseZodiac === 9){
        console.log(`You are a: Rooster 🐓`);
    } else if(formulaForChineseZodiac === 10){
        console.log(`You are a: Dog 🐶`);
    }else if(formulaForChineseZodiac === 11){
        console.log(`You are a: Pig 🐷`);
    } else{
        alert(`Something went wrong!`);
    }
}
