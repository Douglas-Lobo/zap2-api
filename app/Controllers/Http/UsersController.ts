import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
export default class UsersController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}

  public async friends({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    await user.load('friends')
    // const friend = await User.findOrFail(user.friends[0].friendId)
    // return friend

    const friends: any[] = []
    user.friends.forEach(async (friend) => {
      friends.push(await (await User.findOrFail(friend.friendId)).toJSON())
    })
    console.log(friends)
  }
}
