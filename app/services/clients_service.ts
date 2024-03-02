import Client from '#models/client'

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
    const client = await Client.query().select('name', 'cpf').where('id', clientId)

    return client
  }

  async update(clientId: number, body: Client) {
    const client = await Client.findOrFail(clientId)

    client.name = body.name
    client.cpf = body.cpf

    await client.save()
  }

  async delete() {}
}
