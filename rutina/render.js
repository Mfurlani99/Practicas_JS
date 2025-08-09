export const renders = {
 render() {
    const lista = document.getElementById("listaTareas")
    lista.innerHTML = ""

    Tareas.forEach(t => {
        const check = document.createElement("input"); //creo el chetbox

        check.type = "checkbox"; //le doy su tipo al imput

        check.checked = t.estado; // guardo el estado
        check.dataset.id = t.id;

        check.addEventListener("change", e => { // el addEventListener no lo comprendo es algo que tendremos que profundisar luego , tampoco entiendo este tipo de funcion
            t.estado = check.checked; // aca modifico el estado del checked
             
            const idSeleccionado = e.target.dataset.id;
            cambiarEstado(idSeleccionado)
            render(); // renderizo de nuevo para poder ver los cambios

        });



        const li = document.createElement("li");

        li.textContent = `EL id es: ${t.ID} - de la tarea: ${t.tarea} — horario: ${t.hora}`;

        lista.append(li);
        li.append(check);


    })
}
}