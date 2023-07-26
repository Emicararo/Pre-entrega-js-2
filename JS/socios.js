
function socio() {
    let nuevoSocioNombre = prompt("Como es tu nombre?");
    let nuevoSocioEdad = Number(prompt("Que edad tienes?"));

    if (nuevoSocioEdad >= 18) {
        let tribuna = prompt("A que tribuna te gustaria asociarte? \n A) popular \n B) Platea Heredia \n C)Preferencial \n D)Platea Cuellar").toUpperCase();

        if (tribuna === "A") {
            let confirmarA = prompt("El abono del semestre de la popular es de $25.000 \n ingrese SI para confirmar e ingresar a \n la base de datos del club").toUpperCase();
            if (confirmarA === "SI") {
                let tarjeta = prompt("Gracias " + nuevoSocioNombre + " Dentro de las 72hs nos vamos a estar comunicando con vos, como te gustaria hacer el pago? Credito o Debito?").toLowerCase;
                if (tarjeta === "debito") {
                    alert("Podes hacerlo hasta en 6 cuotas SIN INTERES! Nos vamos a estar comunicando con vos!")
                } else {
                    alert("gracias por visitar la pagina del club atletico Belgrano. A la brevedad nos pondremos en contacto con vos!")

                }
            }
        } else if (tribuna === "B") {
            let confirmarB = prompt("El abono del semestre de la Platea Heredia es de $45.000 \n ingrese SI para confirmar e ingresar a \n la base de datos del club").toUpperCase();
            if (confirmarB === "SI") {
                let tarjeta = prompt("Gracias " + nuevoSocioNombre + "Dentro de las 72hs nos vamos a estar comunicando con vos, como te gustaria hacer el pago? Credito o Debito?");
                if (tarjeta === "debito") {
                    alert("Podes hacerlo hasta en 6 cuotas SIN INTERES! Nos vamos a estar comunicando con vos!")
                } else {
                    alert("gracias por visitar la pagina del club atletico Belgrano. A la brevedad nos pondremos en contacto con vos!")

                }
            }
        } else if (tribuna === "C") {
            let confirmarC = prompt("El abono del semestre de la Preferencial es de $35.000 \n ingrese SI para confirmar e ingresar a \n la base de datos del club").toUpperCase();
            if (confirmarC === "SI") {
                let tarjeta = prompt("Gracias " + nuevoSocioNombre + "Dentro de las 72hs nos vamos a estar comunicando con vos, como te gustaria hacer el pago? Credito o Debito?");
                if (tarjeta === "debito") {
                    alert("Podes hacerlo hasta en 6 cuotas SIN INTERES! Nos vamos a estar comunicando con vos!")
                } else {
                    alert("gracias por visitar la pagina del club atletico Belgrano. A la brevedad nos pondremos en contacto con vos!")

                }
            }else if(confirmarC != "SI"){
                alert("gallina, culiada, puta y reventada")
            }
        } else if (tribuna === "D") {
            let confirmarD = prompt("El abono del semestre de la Platea Cuellar es de $65.000 \n ingrese SI para confirmar e ingresar a \n la base de datos del club").toUpperCase();
            if (confirmarD === "SI") {
                let tarjeta = prompt("Gracias " + nuevoSocioNombre + "Dentro de las 72hs nos vamos a estar comunicando con vos, como te gustaria hacer el pago? Credito o Debito?");
                if (tarjeta === "debito") {
                    alert("Podes hacerlo hasta en 6 cuotas SIN INTERES! Nos vamos a estar comunicando con vos!")
                } else {
                    alert("gracias por visitar la pagina del club atletico Belgrano. A la brevedad nos pondremos en contacto con vos!")

                }
            }
        } else {
            alert("Opción no válida. Por favor, seleccione una opción válida.");
        }
    } else {
        alert("Lo siento, debes tener al menos 18 años para asociarte al club.");
    }
}

socio();



