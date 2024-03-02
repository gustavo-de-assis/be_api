import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, manyToMany } from '@adonisjs/lucid/orm'
import Product from './product.js'
import type { HasOne, ManyToMany } from '@adonisjs/lucid/types/relations'
import Client from './client.js'

export default class Sale extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare total_price: number

  @column()
  declare client_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Product)
  declare products: ManyToMany<typeof Product>

  @hasOne(() => Client)
  declare client: HasOne<typeof Client>
}
