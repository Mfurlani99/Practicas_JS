
/*function operacion(a,b,Callback){
   return Callback(a,b)
}


function sumar(a,b){
   return a + b
}

function restar(a,b){
   return a - b
}

function multiplicar(a,b){
   return a * b
}

const resultadosuma = operacion(3,5,sumar)
console.log("el resultado de la suma es: "+resultadosuma)

const resultadorestar = operacion(3,5,sumar)
console.log("el resultado de la suma es: "+resultadorestar)

const resultadomultiplicar = operacion(3,5,multiplicar)
console.log("el resultado de la suma es: "+resultadomultiplicar)*/


/*const promesa = new Promise((resolve, reject) => {
  let exito = Math.random()
  if (exito < 0.5) {
    resolve("Datos obtenidos correctamente");
  } if(exito > 0.5){
    reject("Error al obtener los datos");
  }
});

promesa
  .then(resultado => console.log(resultado))
  .catch(error => console.log("Error:", error));*/

  

  async function obtenerDatos() {
  try {
    const respuesta = await fetch("https://api.example.com/datos");
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error("Error en fetch:", error);
  }
}

obtenerDatos();