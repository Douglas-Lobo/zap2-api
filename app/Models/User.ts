import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import Friend from 'App/Models/Friend'
import { column, beforeSave, BaseModel, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public username: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Friend, {
    pivotTable: 'users_friends',
  })
  public friends: ManyToMany<typeof Friend>

  @beforeSave()
  public static async hashPassword(User: User) {
    if (User.$dirty.password) {
      User.password = await Hash.make(User.password)
    }
  }
}
