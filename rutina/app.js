const Tareas = []
const TareasCompletas = []
const lista = document.getElementById("listaTareas")
const listaC = document.getElementById("listaTareasC")
let contador = 0
document.getElementById("ingresartarea").addEventListener('click', () => {
    crearTareas()
    render()
})

function crearTareas() {
    contador++
    const tarea = document.getElementById("tarea").value
    const hora = document.getElementById("hora").value
    const estado = false
    const id = contador

    

    if (horas(hora)) {
        alert("horario no disponible")
    } else {
        
        console.log(typeof horario)
    const nuevatarea = { id, tarea, hora, estado }
    Tareas.push(nuevatarea)
    }
    
    
    limpiar()
}

function render() {

    lista.innerHTML = ""

    Tareas.forEach(t => {
        const check = document.createElement("input"); //creo el chetbox

        check.type = "checkbox"; //le doy su tipo al imput

        check.checked = t.estado; // guardo el estado
        check.dataset.id = t.id;


        check.addEventListener('change', e => {
            const idSeleccionado = e.target.dataset.id;
            cambiarEstado(parseInt(idSeleccionado))
            render();
        });



        const li = document.createElement("li");

        li.textContent = `EL id es: ${t.id} - de la tarea: ${t.tarea} — horario: ${t.hora}`;

        lista.append(li);
        li.append(check);
    })


    if (TareasCompletas.length > 1) {
        listaC.innerHTML = ""

        const h2 = document.createElement("h2")
        h2.innerHTML = "TAREAS COMPLETADAS"
        listaC.append(h2);
        TareasCompletas.forEach(t => {

            const li = document.createElement("li");

            const horaR = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            li.textContent = `EL id es: ${t.id} - de la tarea: ${t.tarea} — horario: ${horaR}`;

            listaC.append(li);


        })
    }

}

function limpiar() {

    document.getElementById("tarea").value = "";
    document.getElementById("hora").value = "";
}

function horas(hora) {
     const objeto = Tareas.find(item => item.hora == hora);
    if(objeto != null){
return true
    }else{
        return false
    }
}


function cambiarEstado(id) {
    const objeto = Tareas.find(item => item.id == id);
    const indice = Tareas.findIndex(item => item.id == id);
    console.log(objeto)
    //console.log("esto tiene el indice: " + indice)
    TareasCompletas.push(objeto)


    //console.log("tareas completas")

    //console.log(TareasCompletas) 

    Tareas.splice(indice, 1)
    console.log("Tareas eliminadas")
    console.log(Tareas)

    render(); // volvemos a renderisar
}





// agregar checkbox
// seguridad
// no repetir horario
//mover las completas a una sona de completadas
//profundisar en localstorage
