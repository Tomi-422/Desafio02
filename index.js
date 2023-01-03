const products = []

class ProductManager {
    static id = 1 

    constructor (title, description, price, thumbnail, code, stock) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        ProductManager.id
    }

    addProducts() {
        const product = ({
            title: this.title,
            description: this.description,
            price: this.price,
            thumbnail: this.thumbnail,
            code: this.code,
            stock: this.stock,
            id: ProductManager.id
        })

        const check = products.find(e => e.code === product.code)
        if(check === true) {
            console.log("Error, intentalo de nuevo")
        } else {
            products.push(product)
            ProductManager.id ++;
        }
        if(!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock ) {
            throw new Error("Debe llenar todos los campos")
        }
    }
}

const isInCart = (id) => {return products.find(product => product.title === title)}

const getProducts = () => {
    console.log(products)
}

const getProductsById = (id) => {
    const busqueda = products.find(product => product.id === id)
    if(busqueda == undefined) {
        console.log("producto no encontrado")
    } else {
        console.log(busqueda)
    }
}

const isInProducts = (title) => {
    products.find (prod => prod.title === title)
}


const producto1 = new ProductManager("Batoque Acro","Batoque para parapente", 80, "ruta de img", 123, 10)
const producto2 = new ProductManager("chaseCam", "Camara seguidora",120, "ruta de img",124, 2)

producto1.addProducts()
producto2.addProducts()

getProducts()
