import Product from '#models/product'

export default class ProductsService {
  async create(body: Product) {
    Product.create(body)
  }

  async all() {
    const products = await Product.all()

    products.sort(function (a, b) {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })

    return {
      data: products,
    }
  }
}
