const positionArray = [
  {
    position: "Backend Developer",
    price: "gratis"
  },
  {
    position: "Frontend Developer",
    price: "gratis"
  },
  {
    position: "DevOps",
    price: "$50.000 cop"
  },
  {
    position: "Linux Administrator",
    price: "$25.000 cop"
  },
  {
    position: "IT Infrastructure Engineer",
    price: "$20.000 cop"
  },
  {
    position: "Sys Admin",
    price: "$5.000 cop"
  }
]
console.log(positionArray)

const generateticket = document.getElementById ("ticket")
const createticket = (DNI, Name, Position, AssignedPlatform, Entrancefee, entdate)=>{
const date = new Date()
let html = `<div class="row d-flex-row">
<div class="border n-7" style=" height: 400px; padding-left: 50px; padding-right: 50px;">
  <div class="bg danger" style="width: 400px; height: 50px;">

  </div>
  <div class="card mb-3" style="max-width: 900px; height: 300px;">
    <div class="row g-0" style="width: 850px; height: 300px;">
      <div class="col-md-4" style="padding:5%"><div style="height:  100%; width: 100%" class="border n-7" id="Position">${Position}</div></div>              
      <div class="col">
        <div class="col-md-8" style="max-width: 700px;">
          <div class="col">
          <p>${entdate}</P>

            <div class="card-body=" style="width: 400px;">
              <br>
              <br>
              <p id="fieldDNI" class="card-text">${DNI}</p>                        
              <h5 id="fieldName" class="card-text">${Name}</h5>
              <br>

              <button type="button" class="btn btn-outline-dark" id="fieldButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hexagon" viewBox="0 0 16 16">
                  <path d="M14 4.577v6.846L8 15l-6-3.577V4.577L8 1l6 3.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"/>
                </svg>${AssignedPlatform}</button>
              <button id="fieldbutton" class="btn btn-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hexagon" viewBox="0 0 16 16">
                  <path d="M14 4.577v6.846L8 15l-6-3.577V4.577L8 1l6 3.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"/>
                </svg>${Entrancefee}</button>
              <br>
              <br>
              <p class="card-text"><small class="text-muted">${date}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`

generateticket.innerHTML += html


}

const createform = document.getElementById ("createform")
createform.addEventListener('submit', e =>{
  e.preventDefault()
  let position= document.getElementById('validationCustom04').value
  let entdate=document.getElementById('date').value
  let DNI=document.getElementById('inputDNI').value
  let Name= document.getElementById('inputName').value
  let AssignedPlatform=document.getElementById('Tribuna').value
  for (i = 0; i < positionArray.length; i++){
    
    console.log (positionArray[i])
   
  
  
  }
  let Entrancefee=ticket(position)
  createticket(DNI, Name, position, AssignedPlatform, Entrancefee, entdate)

})

const position = "Backend Developer"
const ticket = (position) => {
  const positionArray = [
    {
      position: "Backend Developer",
      price: "gratis"
    },
    {
      position: "Frontend Developer",
      price: "gratis"
    },
    {
      position: "DevOps",
      price: "$50.000 cop"
    },
    {
      position: "Linux Administrator",
      price: "$25.000 cop"
    },
    {
      position: "IT Infrastructure Engineer",
      price: "$20.000 cop"
    },
    {
      position: "Sys Admin",
      price: "$5.000 cop"
    }
  ]


  
};
const form = document.getElementById('form');
// form.addEventListener('get ticket', e => {
//   e.preventDefault();

//   let TechnologicalPosition = document.getElementById('swelect').value;
//   let date2 = document.getElementById


