/*
//Calcula el precio del palo dependiendo de la cantidad de carbono ingresada por el usuario

 */

function calcularTotal() {
    const cantidad = document.getElementById('cantidad').value;
    let precio = 5000;
    const total = cantidad * precio;
    document.getElementById('total').textContent = `Price: $${total.toFixed(2)}`;
}
