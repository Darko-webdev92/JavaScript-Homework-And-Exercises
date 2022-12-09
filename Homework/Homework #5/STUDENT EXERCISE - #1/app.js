//Select the first div 
let firstDiv = document.getElementById("first");

// Select all paragraphs
let allParagraphs = document.getElementsByTagName('p');

// Select the last div

let divs = document.getElementsByTagName('div'); // HTML COLLECTION
let lastDiv = divs[divs.length-1];



// Select the header 3 in the last div
let  header_3_inTheLastDiv = lastDiv.getElementsByTagName('h3')[0];
// Another solution
// let  header_3_inTheLastDiv =  divs[divs.length-1].lastElementChild;


// Select the header 1 in the last div
let  header_1_inTheLastDiv = lastDiv.getElementsByTagName('h1')[0];
// Another solution
// let header_1_inTheLastDiv =  divs[divs.length-1].firstElementChild;


// Get the text from the first paragraph in the second div
let paragraphInDiv = document.getElementsByClassName('second')[0].textContent.trim();
// Another solution
// paragraphInDiv = document.getElementsByClassName('second')[0].innerText;

// Add the word "text" to the text element in the second div
let secondDiv = divs[1].lastElementChild.textContent+= "text";
// Another solution
// secondDiv = document.getElementsByClassName('anotherDiv')[0].lastElementChild.textContent+="text"; // HTML COLLECTION


// Change the text of the header 1 in the last div
header_1_inTheLastDiv.textContent  = "This is also a new text";

// Change the text of the header 3 in the last div
header_3_inTheLastDiv.textContent = "This is a new text ";


let log = console.log;

log(firstDiv);
log(allParagraphs);
log(divs);
log(lastDiv);

log(header_3_inTheLastDiv);
log(header_1_inTheLastDiv);
log(paragraphInDiv);


