/* Aplicar 10% de desc. a los productos que cuesta 1000 o más */

const productos = [
    { id: 'CVJDFUGXM1xcjchdfidXCVDFJ', nombre: 'Camiseta', precio: 500 },
    { id: 'KDgjsdfjsSDFHg5dfgfdlkfgj', nombre: 'Zapatillas', precio: 2000 },
    { id: 'Ofhgnfdesdfsdfsdfs5f7sdfg', nombre: 'Pantalon', precio: 1500 },
]

// aplicando el 10% de descuento
const productosConDescuentos = productos.map(function(producto) {
    // if (producto.precio < 1000) return producto; // Este tipo de retorno se llama: RETORNO TEMPRANO (early return), primera nos sacamos de encima el caso que no nos intera retornando de la función lo antes posible.
    
    // retornar un nuevo objeto, donde las propiedades del objeto original "...producto", pero vamos a pisarle el precio para que tenga el descuento correspondiente "producto.precio * 0.9";
    // Este ahora es un objeto completamente nuevo, el cual creamos copiando de las propiedades del objeto original pero pisándole una propidad.

    return {
        ...producto,
        precio: producto.precio * 0.9
    };

});

console.log(productosConDescuentos);
console.log('\n');
console.log(productos);