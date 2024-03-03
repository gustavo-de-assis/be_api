import Product from '#models/product'
import ProductsService from '#services/products_service'
import { createProductValidator } from '#validators/product'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class ProductsController {
  constructor(protected productService: ProductsService) {}

  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return this.productService.all()
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
    return this.productService.show(params.id)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const data = request.all()
    const body = (await createProductValidator.validate(data)) as Product
    return this.productService.update(params.id, body)
  }

  /**
   * Soft delete record
   */
  async softDelete({ params }: HttpContext) {
    return this.productService.softDelete(params.id)
  }
}
