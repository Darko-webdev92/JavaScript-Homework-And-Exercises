fetch('https://swapi.dev/api/people/1/').then(response => console.log(response));

fetch('https://swapi.dev/api/people/')
.then(response => response.json())
.then(response =>{
    let people = response.results;
    console.log(people);

    var table = new Tabulator("#example-table", {
        data:people, //assign data to table
        layout:"fitColumns",
        columns:[{title: "Name", field:"name"},{title: "Height", field:"height"},{title: "Mass", field:"mass"}]
    });
});