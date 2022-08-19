import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'douglas' }
})

Route.get('users/:id/friends', 'UsersController.friends')
