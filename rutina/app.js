const Tareas = [{tarea: "",horario: "" , estado: ""}]
const lista = document.getElementById("listaTareas")
document.getElementById("ingresartarea").addEventListener('click', () => {
 crearTareas()
render()
})

function crearTareas(){
 const tarea = document.getElementById("tarea").value
  const hora = document.getElementById("hora").value
  const estado = false

  const nuevatarea = {tarea , hora, estado}

  Tareas.push(nuevatarea)
  Tareas.shift()
  console.log(Tareas)
limpiar()
}

function render(){

lista.innerHTML=""

  Tareas.forEach(t => {

        const li = document.createElement("li");

        li.textContent = `${t.tarea} — horario: ${t.hora}`;

        lista.append(li);



})}

function limpiar(){

 document.getElementById("tarea").value = "";
  document.getElementById("hora").value = "";
}

// agregar checkbox 
// seguridad 
// no repetir horario 
//mover las completas a una sona de completadas 
