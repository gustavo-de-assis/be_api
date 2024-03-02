import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import Address from '#models/address'
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Sale from './sale.js'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare cpf: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Sale, {
    foreignKey: 'clientId',
  })
  declare sales: HasMany<typeof Sale>

  @manyToMany(() => Address, {
    pivotTable: 'address_client',
  })
  declare addresses: ManyToMany<typeof Address>
}
