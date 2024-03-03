import Address from '#models/address'
import Client from '#models/client'
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

    const addresses = await Address.query()
      .select('addresses.*')
      .innerJoin('address_client as ac', 'addresses.id', 'ac.address_id')
      .innerJoin('clients', 'ac.client_id', 'clients.id')

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

    return {
      data: {
        client,
        addresses,
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
