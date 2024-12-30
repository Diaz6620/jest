const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./products')

describe('addProduct', () => {
    beforeEach(() => {
        resetProducts()
    })

    it('Should be add a product with unique ID', () => {
       
        const name = 'product1'
        const price = 30

        const product = addProduct('product1', 30)
        const products = getProduct()
        const expectedProduct = { id: 1, productName: name, productPrice: price }

        expect(products).toHaveLength(1)
        expect(products[0]).toEqual(expectedProduct)
        expect(product.id).toBe(1)
    })

    it('Should be increment ID for next products', () => {
        addProduct('product1', 20)
        addProduct('product2', 15)
        
        const products = getProduct()

        expect(products).toHaveLength(2)
        expect(products[1].id).toBe(2)
    })
})