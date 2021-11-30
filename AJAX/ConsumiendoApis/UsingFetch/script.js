//const API_REQUEST = 'https://jsonplaceholder.typicode.com/posts';
/*
//console.log(fetch(API_REQUEST));    // opt: Promise

fetch(API_REQUEST)
 .then(function(valor_de_la_promesa){
     console.log(valor_de_la_promesa);    // opt: Response (obj.)
 })
*/

/***** PART-02  ***** /
fetch(API_REQUEST)
    .then( function(res) {
        //console.log(res);
        res.json()
            .then( function(res) {
                console.log(res);
            }) 
    })
*/

/***** PART-03  *****/

const API_REQ = 'https://jsonplaceholder.typicode.com/posts';

fetch(API_REQ)
.then(
    function(res) {
        res.json().then(
            function(data) {
                console.log(data);
            }
        )
    }
)