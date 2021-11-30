/* Encadenando Promesas:
    Si en el método then(), hay una función que retorna otra promesa.
    Se hace el siguiente ejemplo
*/

// Se hace los siguiente para que el código sea legible:

const API_REQ = 'https://jsonplaceholder.typicode.com/posts';

fetch(API_REQ)
    .then(
        function(res) { return res.json() }
    )
    .then(
        function(data) { console.log(data) }
    )


// o sino con función flecha:

fetch(API_REQ)
    .then( res => res.json() )
    .then( data => console.log(data) )