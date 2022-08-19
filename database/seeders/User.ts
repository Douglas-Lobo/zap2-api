import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        username: 'Virk',
        email: 'virk@adonisjs.com',
        password: 'secret',
      },
      {
        username: 'Douglas',
        email: 'romain@adonisjs.com',
        password: 'supersecret',
      },
      {
        username: 'Paulo',
        email: 'pa@adonisjs.com',
        password: 'supersecret',
      },
      {
        username: 'Plinio',
        email: 'p@adonisjs.com',
        password: 'supersecret',
      },
    ])
  }
}
