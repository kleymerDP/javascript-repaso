const productos = [
    { id: 'riuzhOp!cRy$0Tkp9Syr##8NDIHxeVHj', nombre: 'Camiseta', precio: 500 },
    { id: 'XpAt%n4IZ7WDV@K$uKt*rk9$Vt2%owC!', nombre: 'Zapatillas', precio: 2000 },
    { id: 'wD%hAUu7hpu#JsQXA3bC69VoPB7$cc$$', nombre: 'Pantalon', precio: 1500 },
]

const productoConDescuento = productos.map( function(producto) {
    if (producto.precio < 1000) return producto;
    return { ...producto, precio: producto.precio * 0.9 }
});

console.log(productoConDescuento);
console.log('\n');
// console.log(productos);