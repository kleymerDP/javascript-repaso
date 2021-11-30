/*
    En caso de que nosotros nos equivoquemos o haya errores cuando hacemos la peteción
    al servicio web o API.
    
    Para capturar ese error se utiliza el método cath() que recibe cualquier error.
*/

// Ejemplo 01
const API_REQ = 'https://jsonplaceholder.typicode.com/posts';

fetch(API_REQ)
    .then( req => {
        console.log(req);
        req.json() 
    })
    .then( data => console.log(data) )
    .catch(
        err => console.log(err)
    )