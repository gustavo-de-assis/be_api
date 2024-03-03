import SalesService from '#services/sales_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class SalesController {
  constructor(protected salesService: SalesService) {}
  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const body = request.only(['productId', 'clientId', 'quantity'])

    await this.salesService.store(body.clientId, body.productId, body.quantity)

    response.status(201)

    return {
      message: 'Venda realizada com sucesso!',
    }
  }
}
