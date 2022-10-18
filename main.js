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

let mensajePorcentajeAsistentes = ""


const generateticket = document.getElementById("ticket")
const createticket = (DNI, Name, Position, AssignedPlatform, Entrancefee, entdate) => {
  const date = new Date()
  let html = `<div class="row border border-dark m-5 rounded-2 p-4">
<div class="col">
    <div class="card border border-dark m-5 pt-5">
        <div class="card-body ">
            <h5 class="card-title">${Position}</h5>
            <div class="row">
                <div class="col">
                    <img src="./hexagono 1.jpg" alt="" height="50">
                </div>
                <div class="col">
                ${entdate}
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col p-3">
    <div class="row ">
        <p>${DNI}</p>
    </div>
    <div class="row">
        <h3>${Name}</h3>
    </div>
    <div class="row">
        <div class="col">
            <div class="card border border-dark">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <img src="./hexagono 1.jpg" alt="" height="40">
                        </div>
                        <div class="col">
                            <p>${AssignedPlatform}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card bg-dark">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <img src="./hexagono 2.jpg" alt="" height="40">
                        </div>
                        <div class="col">
                            <p class="text-white">${Entrancefee}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <p>Entrada generada: ${date.toLocaleString()}</p>
        </div>
    </div>
</div>
</div>`

  generateticket.innerHTML += html


}

const createform = document.getElementById("createform")
createform.addEventListener('submit', e => {
  e.preventDefault()
  let Entrancefee;

  let position = document.getElementById('validationCustom04').value
  let entdate = document.getElementById('date').value
  let DNI = document.getElementById('inputDNI').value
  let Name = document.getElementById('inputName').value
  let AssignedPlatform = document.getElementById('Tribuna').value
  for (i = 0; i < positionArray.length; i++) {
    if (position == positionArray[i].position) {
      Entrancefee = positionArray[i].price
      break
    }
  }
  people.push(positionArray[i].position)
  console.log("Cantidad asistentes: " + people.length)
  calcularAsistentes(people)
  createticket(DNI, Name, position, AssignedPlatform, Entrancefee, entdate)

})
function calcularAsistentes(people) {
  let cantidadDevops = 0, cantidadBackend = 0, cantidadFrontend = 0, cantidadLinux = 0, cantidadIt = 0, cantidadSys = 0
  let porcCantidadDevops = 0, porcCantidadBackend = 0, porcCantidadFrontend = 0, porcCantidadLinux = 0, porcCantidadIt = 0, porcCantidadSys = 0
  for (i = 0; i < people.length; i++) {
    switch (people[i]) {
      case "Backend Developer":
        cantidadBackend++
        porcCantidadBackend = calcularPorcentajeAsistentes(people.length, cantidadBackend)

        break
      case "Frontend Developer":
        cantidadFrontend++
        porcCantidadFrontend = calcularPorcentajeAsistentes(people.length, cantidadFrontend)

        break
      case "DevOps":
        cantidadDevops++
        porcCantidadDevops = calcularPorcentajeAsistentes(people.length, cantidadDevops)

        break
      case "Linux Administrator":
        cantidadLinux++
        porcCantidadLinux = calcularPorcentajeAsistentes(people.length, cantidadLinux)

        break
      case "IT Infrastructure Engineer":
        cantidadIt++
        porcCantidadIt = calcularPorcentajeAsistentes(people.length, cantidadIt)

        break
      case "Sys Admin":
        cantidadSys++
        porcCantidadSys = calcularPorcentajeAsistentes(people, cantidadSys)

        break
    }
  }
  
  mensajePorcentajeAsistentes = "total asistentes: " + people.length + "     " + "Backend: "+ porcCantidadBackend  + "%  " + "Frontend: "+ porcCantidadFrontend + "%  " + "DevOps: " + porcCantidadDevops + "Linux Administrator: " + porcCantidadLinux + "IT Infrastructure Engineer" + porcCantidadIt + "Sys Admin" + porcCantidadSys
}
function calcularPorcentajeAsistentes(total, cantidadEspecificaPosicion){
  return cantidadEspecificaPosicion * 100 /total
}

function mostrarAlertaPorcentajes(){
  if (people.length == 0){
    alert("Aun no hay asistentes")
      }else{ 
  alert(mensajePorcentajeAsistentes)
}}
const porcentaje = "porcentaje posicion"
const people = []

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


