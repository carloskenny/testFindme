import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Client from './Client'
import User from './User'

export default class OrderService extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public os_name: string

  @column()
  public os_problem: string

  @column()
  public status: string

  @column()
  public os_latitude: number

  @column()
  public os_longitude: number

  @belongsTo(() => User, { foreignKey: 'user_id' })
  public user: BelongsTo<typeof User>

  @column({ columnName: 'user_id' })
  public user_id: string

  @belongsTo(() => Client, { foreignKey: 'client_id' })
  public client: BelongsTo<typeof Client>

  @column({ columnName: 'client_id' })
  public client_id: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
