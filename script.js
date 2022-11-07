// DEFINIR CONSTANTES QUE SE VAN A USAR
const valorTicket = 200;
const descuentos = {
    estudiantes: 0.80,
    trainee: 0.50,
    junior: 0.15,
};

// DEFINIR EL CODIGO DE LA APLICACION

const cantidad = document.getElementById("cantidad")
const categoria = document.getElementById("categoria")
const botonCalcular = document.getElementById("calcular")
const botonReset = document.getElementById("reset")
const precio = document.querySelector("#precio")

function totalAPagar() {
    let totalvalor = (cantidad.value) * valorTicket;
    if (categoria.value == 2) {
        totalvalor = totalvalor - descuentos.estudiantes * totalvalor //la cuenta
    }
    if (categoria.value == 3) {
        totalvalor = totalvalor - descuentos.trainee * totalvalor //la cuenta
    }
    if (categoria.value == 4) {
        totalvalor = totalvalor - descuentos.junior * totalvalor //la cuenta
    }
    precio.innerHTML = totalvalor
}

function reset() { 
    cantidad.value = 0;
    totalAPagar();
    categoria.value= 1;
}