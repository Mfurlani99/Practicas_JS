# Practicas_JS
Guardar Ejercicios

 Ejercicio 1 – Callback
Enunciado:
Crea una función llamada operacion que reciba tres parámetros:

Un número A

Un número B

Un callback que indique qué operación realizar (por ejemplo, sumar, restar, multiplicar, etc.)

Luego:

Llama a operacion usando un callback que sume.

Llama a operacion usando un callback que multiplique.

🔗 Ejercicio 2 – Promesa básica
Enunciado:
Crea una función obtenerDatos que devuelva una promesa que:

Se resuelva en 2 segundos si Math.random() es mayor que 0.5 (con el mensaje "Datos obtenidos correctamente").

Se rechace si es menor o igual a 0.5 (con el mensaje "Error al obtener los datos").

Luego, usá .then() y .catch() para manejar los resultados.

⏳ Ejercicio 3 – Async/Await
Enunciado:
Reutilizá la función del ejercicio anterior (obtenerDatos) y ahora creá una función mostrarDatos que:

Use async/await para obtener el resultado de obtenerDatos().

En caso de éxito, imprima el mensaje de resolución.

En caso de error, atrape la excepción con try/catch y muestre el mensaje de error.