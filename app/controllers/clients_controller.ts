import ClientsService from '#services/clients_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class ClientsController {
  constructor(protected clientsService: ClientsService) {}

  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return {
      message: 'Show all clients!',
    }
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    return {
      message: 'Create client!',
    }
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return {
      message: `Show client ${params.id}!`,
    }
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    return {
      message: `Update client ${params.id}!`,
    }
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
