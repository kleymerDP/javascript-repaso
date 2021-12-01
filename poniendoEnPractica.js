const products = [
    {
        "id": "ZM2HMskVfKQty3wXW6yOb0V",
        "productName": "Secadora de Pelo",
        "cost": 520
    },
    {
        "id": "m7wvyl9SS0reMHMd0PYRsBu",
        "productName": "Refrigeradora",
        "cost": 2230
    },
    {
        "id": "NgeeNEZ9MvEYorJRoP7fiLE",
        "productName": "Televisión 50\"",
        "cost": 1500
    },
    {
        "id": "aVv9Ck8nY0r4JQKbKdNQQNV",
        "productName": "Secadora de Pelo",
        "cost": 350
    }
];

console.log(products);

const disconuntedProducts = products.map(function(product) {
    if (product.cost < 1000) return product;
    return {
        ...product,
        cost: product.cost * 0.8 
    }
});

console.log(disconuntedProducts);