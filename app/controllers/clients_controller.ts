import Client from '#models/client'
import ClientsService from '#services/clients_service'
import { createClientValidator } from '#validators/client'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class ClientsController {
  constructor(protected clientsService: ClientsService) {}

  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return this.clientsService.all()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.all()
    const body = await createClientValidator.validate(data)

    try {
      this.clientsService.create(body as Client)
      response.status(201)
    } catch (error) {
      response.status(422)
    }
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return this.clientsService.show(params.id)
  }
  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const data = request.all()
    const body = (await createClientValidator.validate(data)) as Client
    return this.clientsService.update(params.id, body)
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    return {
      message: `Delete client ${params.id}!`,
    }
  }
}
