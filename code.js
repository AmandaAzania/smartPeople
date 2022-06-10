    let smartPeople =[
        'Michaela', 'Meagan', 'charles','Raees','Mogamat','Diana'
    ];
    let displayer = document.getElementById("std");
    smartPeople.forEach((item, i)=>{
         displayer.innerHTML += `<li>${item}</li>`;
        
    });
        