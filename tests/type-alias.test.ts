import { Category, Product } from "../src/type-alias";

describe('Type Alias', () => {
  it('should type alias', () => {
    const catogory :Category = {
        id :  2 ,
        name : 'food',
        descriptions : 'product makanan cepat saji'
    }

    const product :Product = {
        id : "3",
        name : "Mie Sedap kari",
        price : 2500,
        category : catogory
    }

    // product.desciption = 'makanan'
    console.info(catogory)
    console.info(product)
  });
})
