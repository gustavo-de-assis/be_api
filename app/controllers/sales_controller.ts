import Client from '#models/client'
import Sale from '#models/sale'
import ClientsService from '#services/clients_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class SalesController {
  constructor(protected clientsService: ClientsService) {}
  /**
   * Handle form submission for the create action
   */
  async store({ params, request, response }: HttpContext) {
    const body = request.body()
    const clientId = params.id

    await Client.findOrFail(clientId)

    body.clientId = clientId

    const sale = await Sale.create(body)

    response.status(201)

    return {
      message: 'Venda realizada com sucesso!',
      data: sale,
    }
  }
}
