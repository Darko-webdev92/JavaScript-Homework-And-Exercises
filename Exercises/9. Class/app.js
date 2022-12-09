let btn = document.getElementById('btn');
let ul = document.createElement('ul');
let div = document.getElementById('div');
let names = [];
let imgages = [];
function api2(){
   
const container = $("#div")[0];
for(let i = 1; i<10; i++){
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${i}`,
        success: function(res){
            let img = res.sprites.back_default;
            let image = document.createElement('img');
            image.setAttribute('src',img);
            imgages.push(image);
        }
    })
}
}

function api(){
    var xhttp = new XMLHttpRequest();
    // ul.textContent = ''
    xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(xhttp.response) 

            // data.results.length
            for(let i = 1; i<10; i++){
                // let li = document.createElement('li');
                // li.textContent = `${i+1} ${data.results[i].name}`;
                // ul.appendChild(li);
                names.push(data.results[i].name);
            }
            // document.body.appendChild(ul);   
           // Typical action to be performed when the document is ready:
        }
    };
    xhttp.open("GET", "https://pokeapi.co/api/v2/ability", true);
    xhttp.send();
}

btn.addEventListener('click', function(){
    console.log(location.hash);
//     api();
//     api2();
// for(let i = 1; i<10; i++){
//     let li = document.createElement('li');
//     li.textContent = names[i];
//     // li.append(imgages[i]);
//     ul.appendChild(li);
// }
// document.body.appendChild(ul);

})