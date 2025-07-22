
function dividirNumeros(a, b){
    let resultado = a/b
    return resultado;
}

function ecuacion(){
try {
const n1 = Number(document.getElementById("n1").value);
const n2 = Number(document.getElementById("n2").value);

// Validar que los valores sean números
        if (isNaN(n1) || isNaN(n2)) {
            throw new Error("Ambos valores deben ser números.");
        }

        // Validar división por cero
        if (n2 === 0) {
            throw new Error("No se puede dividir por 0.");
        }

        const resultado = dividirNumeros(n1, n2);
        console.log("El resultado es:", resultado);

    } catch (error) {
        console.error("Error detectado:", error.message);
    }
}