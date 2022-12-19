class ProductManager {
    products;
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        if(this.products.find(x => x.code ===  product.code)){
            return console.log("Product code already exists");
        }
        else if(product.title == null || product.price == null || product.code == null || product.description == null || product.thumbnail == null || product.stock == null){
            return console.log("some date is null");
        }
        else{
            product.id = this.idGenerator()
            this.products.push(product);
        }
    }

    getProducts() {
        if(this.products.length > 0){
            console.log(this.products);
        }else{
            console.log("no products found")
        }
    }

    getProductById(id) {
        if(this.products.find(product => product.id === id)){
            let productToGet = this.products.find(product => product.id === id)
            console.log(productToGet)
        }else{
            console.log("The id of the product to get is not found")
        }
    }

    idGenerator(){
        if(this.products.length > 0){
            let id = this.products.map(product => product.id)
            return Math.max(...id) + 1
        }else{
            let id = 1
            return id
        }
    }
}

// Node test !!

//creacion de instancia ProductManager
const productManager = new ProductManager

//LLamando a getProducts(devuelve vacio)
productManager.getProducts()

//Producto de prueba 
let product1 = {title:'Pencil',description: 'Black pencil', price: 150 , code : 'PB230', thumbnail: 'url://images', stock : 10 }

// Llamando a addProduct con el producto de prueba
productManager.addProduct(product1)

//se llama nuevamente getProducts para mostrar el producto de prueba agregado
productManager.getProducts()

//se intenta agregar nuevamente el mismo producto (arrojara error ya que el code se repite)
productManager.addProduct(product1)

//se llama getProductById para traer el producto con id = '1'
productManager.getProductById(1)

//se llama getProductById para traer el producto con id = '2' (inexistente arrojara error)
productManager.getProductById(2)

//se valida que esten todas las props del producto

let product2 = {title:'Pencil',description: 'Black pencil'}
productManager.addProduct(product2)