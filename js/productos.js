// DECLARACIÓN DE CLASE PRODUCTO
class Producto {
  constructor(id, nombre, precio, categoria, cantidad, img) {
          this.id = parseInt(id);
          this.nombre = nombre;
          this.precio = parseFloat(precio);
          this.categoria = categoria;
          this.cantidad = cantidad || 1;
          this.img = img;
  }

  agregarCantidad(valor) {
    // this.cantidad = this.cantidad + valor;
    this.cantidad += valor;
  }

  subtotal() {
    return this.cantidad * this.precio;
  }

}
