import Product from '#models/product'

export default class ProductsService {
  async create(body: Product) {
    Product.create(body)
  }

  async all() {
    const products = await Product.query()
      .select('name', 'price')
      .where('is_deleted', 0)
      .orderBy('name')

    return {
      data: products,
    }
  }

  async show(productId: number) {
    const product = await Product.query().select('name', 'price').where('id', productId)

    return product
  }

  async update(productId: number, body: Product) {
    const product = await Product.findOrFail(productId)

    product.name = body.name
    product.price = body.price

    await product.save()
  }

  async softDelete(productId: number) {
    const product = await Product.findOrFail(productId)

    product.is_deleted = true

    await product.save()

    return {
      message: 'Produto excluido com sucesso!',
    }
  }
}
