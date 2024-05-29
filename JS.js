/*


 */

function calcularTotal() {
    const cantidad = document.getElementById('cantidad').value;
    let precio = 3000;
    const total = cantidad * precio;
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}
