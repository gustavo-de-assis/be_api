import Product from '#models/product'
import ProductsService from '#services/products_service'
import { createProductValidator } from '#validators/post'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class ProductsController {
  constructor(protected productService: ProductsService) {}

  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return {
      message: 'Show all products!',
    }
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.all()
    const body = await createProductValidator.validate(data)

    try {
      this.productService.create(body as Product)
      response.status(201)
    } catch (error) {
      response.status(422)
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
