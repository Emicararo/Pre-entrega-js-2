class Producto {
    constructor(modelo, talle, precio) {
      this.modelo = modelo;
      this.talle = talle;
      this.precio = precio;
    }
  
    verInfo() {
      return `Modelo: ${this.modelo}, Talle: ${this.talle}, Precio: $${this.precio}`;
    }
  }
  
 
  let joggingBelgrano = new Producto("Joggin Belgrano", "S", 5000);
  let remeraBelgrano = new Producto("Remera Belgrano 2023", "L", 4600);
  let remeraNiñoBelgrano = new Producto("Remera niño Belgrano", "16", 3500);
  let conjuntoNiñoBelgrano = new Producto ("Conjunto niño Belgrano", "14", 8000)
  
  
  let carrito = [joggingBelgrano, remeraBelgrano, remeraNiñoBelgrano, conjuntoNiñoBelgrano];
  
  
  console.log("Carrito de compras:");
  carrito.forEach((producto) => console.log(producto.verInfo()));
  
  
  let total = carrito.reduce((totalAcumulado, producto) => totalAcumulado + producto.precio, 0);
  console.log("Total: $" + total);