const API_REQ = 'https://jsonplaceholder.typicode.com/post';
const app = document.querySelector('#app');

fetch(API_REQ)
    .then( res => res.json() )
    .then( data => console.log(data) )