import Client from '#models/client'

export default class ClientsService {
  async create(body: Client) {
    Client.create(body)
  }

  async all() {}

  async show() {}

  async update() {}

  async delete() {}
}
