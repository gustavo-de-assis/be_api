import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return {
      message: 'Showing all products!',
    }
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    return {
      message: 'Created!',
    }
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return {
      message: `Showing ${params.id} product!`,
    }
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    return {
      message: `Updating ${params.id} product with new data`,
      data: request,
    }
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    return {
      message: `Destroying ${params.id} product!`,
    }
  }
}
