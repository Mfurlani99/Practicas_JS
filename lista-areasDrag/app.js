const Tareas = [];


const form = document.querySelector("form")
const contenedor = document.getElementById("Ctareas")
const completas = document.getElementById("completas")

form.addEventListener("submit", function(event) {
    event.preventDefault()
    agregartarea()
})

function agregartarea() {
    const id = Tareas.length + 1 
    const tarea = document.getElementById("Tarea").value
    const estado = false

    const nuevatarea = {id, tarea, estado}

    Tareas.push(nuevatarea)

    render()
    form.reset()

    console.log(Tareas)
}


function render() {
    contenedor.innerHTML = "";
    completas.innerHTML = "";

    Tareas.forEach((e) => {
        const p = document.createElement("p"); // creamos el <p>
        p.id = e.id;
        p.textContent = e.tarea;
        p.draggable = true;

        // Evento dragstart específico de este <p>
        p.addEventListener("dragstart", (event) => {
            event.dataTransfer.setData("text/plain", e.id);
            console.log("Arrastrando tarea con id:", e.id);
        });

        contenedor.appendChild(p); // agregamos al contenedor
    });

   completas.addEventListener("dragover", e=>{
    e.preventDefault()
   })

   completas.addEventListener("drop", e => {
    e.preventDefault();
    const id_p = e.dataTransfer.getData("text/plain"); // el id que guardamos
    const parrafo = document.getElementById(id_p); // buscamos por id
    completas.appendChild(parrafo); // lo movemos al contenedor de completadas
});

}

;