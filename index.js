
    const tableBtn = document.getElementById("table");
    const addBtn = document.getElementById("willadd");
    const tableContainer = document.getElementById("tableContainer");

    const username = document.getElementById("name");
    const number = document.getElementById("number");
    const position = document.getElementById("position");
    const age = document.getElementById("age");
    const height = document.getElementById("height");
    const weight = document.getElementById("weight");
    const img = document.getElementById("img");
    const rating = document.getElementById("rating");
    const bio = document.getElementById("message");

    const searchInput = document.getElementById("search");
    const selectPosition = document.getElementById("pozitsiya");
    const selectSort = document.getElementById("numbers");


    const form = document.getElementById("form")
    let player = []

 let players = JSON.parse(localStorage.getItem("players")) ;

 function local(){
     localStorage.setItem("players",JSON.stringify(players))}

addBtn.addEventListener('click',()=>{
    const person = {
        usernames:username.value.trim(),
        number:number.value,
        position:position.value,
        age:age.value,
        height:height.value,
        weight:weight.value,
        img:img.value,
        rating:rating.value,
        bio:bio.value,
    }

    players.push(person)
    player.push(person)
    local(players)

  
    form.reset()

    console.log(person)
    let isTable=false;
      
    tableBtn.addEventListener('click',()=>{
        const tables = document.createElement('div')
        isTable = !isTable
        if(isTable ===true){tables.innerHTML=`
       <table border="1" cellpadding="8" cellspacing="0">
        <thead>
            <tr>
                <th>username</th>
                <th>number</th>
                <th>position</th>
                <th>age</th>
                <th>height</th>
                 <th>weight</th>
                <th>img</th> 
                <th>rating</th>
                <th>bio</th>
    
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${person.usernames}</td>
                <td>${person.number}</td>
                <td>${person.position}</td>
                <td>${person.age}</td>
                <td>${person.height}</td>
                <td>${person.weight}</td>
                <td>${person.img}</td>
                <td>${person.rating}</td>
                <td>${person.bio}</td>
    
            </tr>
        </tbody>
    </table>`}else{
        tables.style.display='none'
    }
    tableContainer.appendChild(tables)
    
    })
})




