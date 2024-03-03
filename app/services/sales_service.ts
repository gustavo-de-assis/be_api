import Client from '#models/client'
import Product from '#models/product'
import Sale from '#models/sale'

export default class SalesService {
  async store(clientId: number, productId: number, quantity: number) {
    const client = await Client.findOrFail(clientId)
    const product = await Product.findOrFail(productId)
    const total_price = product.price * quantity

    const sale = await Sale.create({
      clientId: client.id,
      productId: product.id,
      quantity,
      total_price,
    })

    return {
      sale,
    }
  }
}
