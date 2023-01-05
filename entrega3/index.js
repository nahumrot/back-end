const {productManager} = require('./controller');
const express = require('express');

const app = express();
const port = 8080;

app.get('/products', (req, res) => {

    let data =  productManager.getAllProducts();
    const limit = req.query.limit

    if(limit && !isNaN(limit)){
        let productsToSee = data.slice(0 , limit);
        return res.send(productsToSee);
    }
    
    res.send(data)
    
});

app.get('/products/:id', (req, res) => {
    let id = Number(req.params.id)
    let data = productManager.getProductById(id)
    res.send(data);
})


app.listen(port, () => { 
    console.log(`Listening on port: http://localhost:${port}`) 
});