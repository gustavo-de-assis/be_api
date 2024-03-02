import vine from '@vinejs/vine'

export const createClientValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3),
    cpf: vine.string().fixedLength(11).regex(/^\d*$/),
  })
)
