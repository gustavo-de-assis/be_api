import vine from '@vinejs/vine'

export const createAddressValidator = vine.compile(
  vine.object({
    street: vine.string().trim().minLength(3),
    house_number: vine.string().trim(),
    district: vine.string().trim().minLength(3),
    city: vine.string().trim().minLength(3),
    state: vine.string().trim().minLength(3),
    country: vine.string().trim().minLength(3),
    zip_code: vine.string().trim().fixedLength(8).regex(/^\d*$/),
  })
)
