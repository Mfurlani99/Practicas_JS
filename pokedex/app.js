let URL = 'https://pokeapi.co/api/v2/pokemon'




  document.getElementById("botonBusqueda").addEventListener('click', () => {
  const Pokemon = document.getElementById("PokemonEntrada").value
  if (Pokemon) {
    fetchDatosPokemon(Pokemon)
  }
})

function fetchDatosPokemon(Pokemon) {
  fetch(`${URL}/${Pokemon}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);                // ✅ Logueás los datos
      mostrarDatosPokemon(data);       // ✅ Los usás en tu función
    })
    .catch(error => alert('Ese Pokemon no existe o no esta listado', error));
}


function mostrarDatosPokemon(data) {
    const divDP = document.getElementById("datospoke");
    divDP.innerHTML = '';

    const lista = document.createElement("ul");
    const tipos = data.types.map(item => item.type.name);
    const nombresStats = data.stats.map(item => ({ nombre: item.stat.name, valor: item.base_stat }));

    // Título con el nombre del Pokémon
    const titulo = document.createElement('h2');
    titulo.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1); // Capitalizar el nombre

    // Imagen del Pokémon
    const img = document.createElement("img");
    img.src = data.sprites.front_default;

    // Agregar estadísticas
    nombresStats.forEach(stat => {
        const li = document.createElement('li');
        li.textContent = `${stat.nombre.charAt(0).toUpperCase() + stat.nombre.slice(1)}: ${stat.valor}`;
        lista.appendChild(li);
    });

    // Agregar tipos
    const tiposList = document.createElement("ul");
    tipos.forEach(tipo => {
        const li = document.createElement('li');
        li.textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1); // Capitalizar tipo
        tiposList.appendChild(li);
    });

    divDP.appendChild(titulo);
    divDP.appendChild(img);
    divDP.appendChild(tiposList);
    divDP.appendChild(lista);
    divDP.style.display = 'block'; // Mostrar datos
}
