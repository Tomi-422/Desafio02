
const fs = require ('fs')

class ProductManager {
    constructor(path) {
      this.path = path;
      this.products = this.readFile();
    }
  
    readFile() {

        try {
        
        const data = JSON.parse(fs.readFileSync(`./${this.path}`, "utf-8"));
        
        return data;
        
        } catch (error) {
        
        return []
        
        }
        
        }
  
    writeData(data) {
      let dataString = JSON.stringify(data);
      fs.writeFileSync(`./${this.path}`, dataString);
    }


    addProducts(product) {     

        let listado = this.readFile();
        const checkInCart = listado.find(p => p.code === product.code)

        if (!product.title || !product.description || !product.price ||
            
            !product.thumbnail || !product.code || !product.stock) {
                
                throw new Error('Todos los campos son obligatorios'); 
            } else if (checkInCart){
                console.log("ERROR - Please check the information and try again")
            }
        else {
            
            
            listado.id = listado.length > 0 ? listado[listado.length - 1].id + 1 : 1;
            listado.push(product)
            this.writeData(data)
                             
        }
    }
            
         
        
    getProducts () {
        try {
        
            const data = JSON.parse(fs.readFileSync(`./${this.path}`, "utf-8"));
            
            return data;
            
            } catch (error) {
            
            return []
            
            }
            
            }


// const isInCart = (id) => { return products.find (product =>product.title ===title) }


getProductsById (id){
     
    let listaProductos = this.readFile();
    const products = listaProductos
    

  const search = products.find(product => product.id === id) //asi el find??

if (search == undefined) {
  console.log( "Product not found")
}
else {
    
  return search 
}
}

isInProducts  (title)  {
    products.find (prod => prod.title === title)
}




updateProduct(id, product){
  
    let data = this.readFile ();
    if(data.find(product=>product.id===id)){
        let productDeleted = data.filter(product => product.id!==id)
        product.id=id;
        productDeleted.push(product);
        this.writeData(productDeleted);
        return productDeleted;

    }
    else{
        console.log('The product to be updated does not exist')
    }
}


async deleteProduct (id){
    let productos = await  this.readFile() //Aca no estes getAll debes llamar getProducts() o readFile()
    try {
       productos = productos.filter (producto =>producto.id != id )
    this.writeData(productos)
        
    } catch (err) {
        console.log("Oops! There has been a mistake")
    }
}

deleteAll(){
    this.writeFile([])
}
}

const newProd = new ProductManager('productos.JSON');

newProd.updateProduct(1,{
            title: "Lámpara Tokio",
            description: "Lámpara escritorio aluminio negro led",
            price: 2200,
            thumbnail: "ruta de imagen",
            code: 101,
            stock: 3,
}) 

newProd.updateProduct(2,{
    title: "Lampara Double Sh",
    description: "Embutido retraible doble cabezal móvil aluminio blanco led",
    price: 3200,
    thumbnail: "ruta de imagen",
    code: 102,
    stock: 4,
}) 

newProd.updateProduct(3,{
    title: "Lámpara Hat",
    description: "Lámpara escritorio aluminio negro led",
    price: 2500,
    thumbnail: "ruta de imagen",
    code: 103,
    stock: 5,
}) 

