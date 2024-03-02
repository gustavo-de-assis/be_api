import Address from '#models/address'

export default class AddressesService {
  async create(body: Address) {
    Address.create(body)
  }

  async all() {
    const address = await Address.all()
    return {
      data: address,
    }
  }

  async show(addressId: number) {
    const address = await Address.findOrFail(addressId)

    return address
  }

  async update(addressId: number, body: Address) {
    const address = await Address.findOrFail(addressId)

    address.street = body?.street
    address.house_number = body?.house_number
    address.district = body?.district
    address.city = body?.city
    address.state = body?.state
    address.country = body?.country
    address.zip_code = body?.zip_code

    await address.save()
  }

  async delete() {}
}
