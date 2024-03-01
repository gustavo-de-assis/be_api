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

  async show() {}

  async update() {}

  async delete() {}
}
