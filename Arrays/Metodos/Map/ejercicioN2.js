/* Aplicar 10% de desc. a los productos que cuesta 1000 o más */

const productos = [
    { id: 'CVJDFUGXM1xcjchdfidXCVDFJ', nombre: 'Camiseta', precio: 500 },
    { id: 'KDgjsdfjsSDFHg5dfgfdlkfgj', nombre: 'Zapatillas', precio: 2000 },
    { id: 'Ofhgnfdesdfsdfsdfs5f7sdfg', nombre: 'Pantalon', precio: 1500 },
]


const idProductos = productos.map(({ id }) => id);

console.log(idProductos);