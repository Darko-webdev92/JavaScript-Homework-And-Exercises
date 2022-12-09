// HOMEWORK PART 1
$(' ').ready(function(){
   const input = $('#name');
   const submit = $('#submit')

       submit.click(function(){
        $("#result").empty();
       let  h1 = `<h1>${input.val()}  output message: Hello there ${input.val()} </h1>`;
       $("#result").append(h1);
       input.val('')
   })


// HOMEWORK PART 2     
   const text = $('#text');
   const color = $('#color');
   const generateH1 = $('#generateH1');

   generateH1.click(function(){
         $(".result").empty();

    let  h1 = `<h1 class="h1-text">${text.val()} ${color.val()}</h1>`;  
    

    if(text.val() === ''){
        alert("ERROR")
    }else{  
        $(".result").append(h1);
        text.val('')
        color.val('#000000');
    }
   })
})


