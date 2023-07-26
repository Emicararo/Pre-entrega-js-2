//declaracion de variables para el socio que refiere y las cuotas.

function club() {

    let socio;
    const cuota = 40000

    while (true) {
        socio = prompt(`Bienvenido a la seccion de Socios Referidos del club atletico Belgrano.
        \nIngresa la cantidad de socios que referiste (Hasta 4 referidos por socio) por cada socio referido tenes un 5% de descuento en nuestra Tienda para socios.
        \n¿Cuantos socios referiste?
        \n Ingresa el numero de socios referidos, y conoce tu descuento!`)

        if (socio === "" || socio === " ") {
            alert("No ingresaste ningun numero")
        } else if (socio === null) {
            alert("Gracias por vistar la pagina del club atletico Belgrano")
            break
        }

        socio = Number(socio)

        if (socio === 1) {
            let des1 = cuota - cuota * 0.05;
            alert(
                "Tenes un 5% de descuento, usalo en cualquiera de nuestros productos. "
            );break
        } else if (socio === 2) {
            let des2 = cuota - cuota * 0.1;
            alert(
                "Tenes un 10% de descuento, usalo en cualquiera de nuestros productos. "
            );break
        } else if (socio === 3) {
            let des3 = cuota - cuota * 0.15;
            alert(
                "Tenes un 15% de descuento, usalo en cualquiera de nuestros productos. " 
                
            );break
        } else if (socio === 4) {
            let des4 = cuota - cuota * 0.2;
            alert(
                "Tenes un 20% de descuento, usalo en cualquiera de nuestros productos. " 
                
            );break
        } else if (socio > 4) {
            alert("no se puede referir mas de 4 personas");
        } else {
            break;
        }
    }



}

club()