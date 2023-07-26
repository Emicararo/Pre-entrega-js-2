
// pre - tienda e-commerce

class Producto {
    constructor(modelo, talle, precio) {
        this.modelo = modelo
        this.talle = talle
        this.precio = precio
        this.info = `${this.modelo}, talle ${this.talle}, precio : ${this.precio}`
    }
    verInfo() {
        console.log(this.info);
    }
}

// productos disponibles para compras

let joggingBelgrano = new Producto("Joggin Belgrano", "S", 5000);

let remeraBelgrano = new Producto("Remera Belgrano 2023", "L", 4600)

let remeraNiñoBelgrano = new Producto("Remera niño Belgrano", "16", 3500)

let conjuntoNiñoBelgrano = new Producto("Conjunto niño Belgrano", "12", 8500)



joggingBelgrano.verInfo()
remeraBelgrano.verInfo()
remeraNiñoBelgrano.verInfo()
conjuntoNiñoBelgrano.verInfo()