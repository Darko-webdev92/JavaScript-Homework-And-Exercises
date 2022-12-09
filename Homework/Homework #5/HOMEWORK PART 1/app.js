let paragraphs = document.getElementsByTagName('p');

for(let i = 0; i<paragraphs.length;i++){
    paragraphs[i].textContent = "lorem impsum";
}

let h1 = document.getElementsByTagName('h1');
for(let i = 0; i<h1.length;i++){
    h1[i].textContent = "H1 CHANGED"
}

let h3 = document.getElementsByTagName('h3');
h3[0].textContent = "H3 is changed";
