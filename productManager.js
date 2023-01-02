const fs = require ('fs')

class ProductManager {
    constructor(patch) {
        this.patch = patch
        this.products = this.readFile()
    }

    readFile(){
        try{
            const data = JSON.parse(fs.readFileSync(`./${this.patch}`,"utf-8"))
            return data
        } catch (error) {
            return []
        }
    }

    writeData(data) {
        let dataString = JSON.stringify(data)
        fs.writeFileSync(`./${this.patch}`, dataString)
    }

    addProducts(product) {
        let list = this.readFile()
        const checkInCart = list.find(p => p.code === product.code)
        if(!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            throw new Error('Debe completar   todos los campos')
        } else if(checkInCart) {
            console.log("Error, verifique la informacion")
        } else {
            list.id = list.length > 0 ? list[list.length - 1].id + 1 : 1
            list.push(product)
            this.writeData(data) 
        }
    }

    getproducts () {
        try{
            const data = JSON.parse(fs.readFileSync(`./${this.patch}`,"utf-8"))
            return data
        } catch (error) {
            return []
        }
    }

    getproductsById (id) {
        let listaProductos = this.readFile()
        const products = listaProductos

        const busqueda = products.find(product => product.id === id)
        if(busqueda == undefined) {
            console.log("producto no encontrado")
        } else {
            return busqueda
        }
    }

    isInProducts (title) {
        products.find (prod => prod.title === title)
    }

    updateProduct(id, product) {
        let data = this.readFile()
        if(data.find(product => product.id === id)) {
            let productDeleted = data.filter(product => product.id!==id)
            product.id=id
            productDeleted.push(product)
            this.writeData(productDeleted)
            return productDeleted
        } else {
            console.log('El producto que se quiere actualizar no existe')
        }
    }

    async deleteProduct (id) {
        let productos = await this.readFile()
        try{
            productos = productos.filter (producto => producto.id != id)
            this.writeData(productos)
        } catch (err) {
            console.log("Hay un error")
        }
    }

    deleteAll(){
        this.writeFile([])
    }
}

const newProduct = new ProductManager('productos.JSON')

newProduct.addProducts(1,{
    title: "Batoque Acro",
    description: "Batoque para parapente",
    price: 80,
    thumbnail: "ruta-img",
    code: 123,
    stock: 10
})

newProduct.addProducts(2,{
    title: "ChaseCam",
    description: "Camara",
    price: 80,
    thumbnail: "ruta-img",
    code: 124,
    stock: 2
})