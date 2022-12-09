let firstNameEl = document.getElementById('firstName');
let storyEl = document.getElementById("story");
let optionEl = document.getElementById("when");
let btn = document.getElementById('btn');

let paragraph = document.getElementById('paragraph');

function storyTeller(who, what, when){
    return `${who} ${what} ${when}`
}

btn.addEventListener('click', function(){
    let storyParagraph = storyTeller(firstNameEl.value,storyEl.value,optionEl.value);
    paragraph.textContent = storyParagraph;
})