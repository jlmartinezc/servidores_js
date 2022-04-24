const Container = require('./class/Container');
const express = require('express');
const filePath = 'files/productos.txt';
const Products = new Container(filePath);
const app = express();

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchado en el puerto ${server.address().port}`);
});

server.on("error", error => console.log(`Eror en el servidor ${error}`));

const getProducts = (res, random = false) => {
    Products.getAllProducts()
    .then((val) => { 
        let products = JSON.parse(val);
        if(random){
            let position = Math.floor(Math.random() * products.length);
            products = products[position];
        }
        res.send(products)
    })
    .catch(err => res.send({'Error': err}))
}

app.get('/productos', (req, res) => { getProducts(res) });
app.get('/productoRandom', (req, res) => { getProducts(res, true) });