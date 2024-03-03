import User from '#models/user'
import auth from '@adonisjs/auth/services/main'
import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'

export default class UsersController {
  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.only(['email', 'password'])

    const user = await User.create(data)

    return user
  }

  async index({ request, response }: HttpContext) {
    const users = User.all()

    return users
  }

  async login({ request, response }: HttpContext) {
    try {
      const { email, password } = request.only(['email', 'password'])

      const user = await User.findBy('email', email)

      if (!user) {
        response.abort('Invalid Credentials!')
      } else {
        await hash.verify(user.password, password)
        const login = await User.verifyCredentials(email, password)
      }
    } catch (error) {
      return response.status(500).send({ error: error })
    }
  }
}
