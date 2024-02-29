import Product from '#models/product'

export default class ProductsService {
  async create(body: Product) {
    Product.create(body)
  }
}
