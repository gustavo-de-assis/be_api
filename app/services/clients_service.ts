import Client from '#models/client'
import Product from '#models/product'
import Sale from '#models/sale'

export default class ClientsService {
  async create(body: Client) {
    Client.create(body)
  }

  async all() {
    const clients = await Client.query().select('name', 'cpf').orderBy('id')

    return {
      data: clients,
    }
  }

  async show(clientId: number) {
    const client = await Client.query().select('cpf', 'name').where('id', clientId)
    /* 
    const sales = await Sale.query()
      .select('quantity', 'total_price')
      .where('client_id', clientId)
      .with('product', (builder) => {
        builder.select('name', 'price').where('id', 'product_id')
      })
      .orderBy('createdAt') */

    const sales = await Sale.query()
      .select(
        'products.name as name',
        'products.price as price',
        'sales.quantity',
        'sales.total_price'
      )
      .innerJoin('products', 'sales.product_id', 'products.id')
      .where('sales.client_id', clientId)
      .orderBy('sales.created_at')

    console.log(sales)
    return {
      data: {
        client,
        sales,
      },
    }
  }

  async update(clientId: number, body: Client) {
    const client = await Client.findOrFail(clientId)

    client.name = body.name
    client.cpf = body.cpf

    await client.save()
  }

  async delete(clientId: number) {
    const client = await Client.findOrFail(clientId)

    await client.delete()

    return {
      message: 'Cliente excluido com sucesso!',
    }
  }
}
