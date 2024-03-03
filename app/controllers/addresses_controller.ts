import Address from '#models/address'
import AddressesService from '#services/address_service'
import { createAddressValidator } from '#validators/address'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AddressesController {
  constructor(protected addressesService: AddressesService) {}

  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return this.addressesService.all()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ params, request, response }: HttpContext) {
    const data = request.only([
      'street',
      'house_number',
      'district',
      'city',
      'state',
      'country',
      'zip_code',
    ])
    const body = await createAddressValidator.validate(data)

    try {
      this.addressesService.create(body as Address, params.id)
      response.status(201)
    } catch (error) {
      response.status(422)
    }
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return this.addressesService.show(params.id)
  }
  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const body = request.body() as Address
    return this.addressesService.update(params.id, body)
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
