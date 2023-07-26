function calcularDescuento(precio, descuento) {
    return precio - (precio * descuento / 100);
}

function programaDescuentos() {
    const descuentos = [
        { nombre: "La voz", descuento: 15 },
        { nombre: "Socios Referidos", descuento: 20 },
        { nombre: "Sanos", descuento: 10 }
    ];

    const claseDeDescuento = prompt("Ingrese el NOMBRE de descuento: \n 1 - La voz \n 2 - Socios Referidos \n 3 - Sanos").toLowerCase();

    const descuentoSeleccionado = descuentos.find(descuento => descuento.nombre.toLowerCase() === claseDeDescuento);

    if (!descuentoSeleccionado) {
        alert("Descuento no válido. Por favor, ingrese un descuento válido.");
        return;
    }

    const precioProducto = Number(prompt("Ingrese el precio del producto: Puede ser sobre el abono o sobre alguna prenda!"));
    const precioFinal = calcularDescuento(precioProducto, descuentoSeleccionado.descuento);
    const montoDescuento = precioProducto - precioFinal;

    alert("Tenes un descuento del " + descuentoSeleccionado.descuento + "%\n" +
        "Monto descontado: $" + montoDescuento + "\n" +
        "Precio final después del descuento: $" + precioFinal);
}

programaDescuentos();