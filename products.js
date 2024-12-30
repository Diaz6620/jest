let products = []
let currentId = 1

const getProduct = () => products

const resetProducts = () => {
products = []
currentId = 1
}

const isNumber = (n) => {
    return typeof n === 'number' 
}

const addProduct = (name, price) => {
    if(name.trim() === '' || !isNumber(price) || price < 0)  {
        throw new Error('Name or price invalid')
    }

    const product = {
        id: currentId++,
        productName: name, 
        productPrice: price
    }

    products.push(product)
    return product
}

module.exports = {
    getProduct,
    resetProducts,
    addProduct
}