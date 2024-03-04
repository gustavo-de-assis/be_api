import Session from '#models/session'
import { HttpContext } from '@adonisjs/core/http'
import { NextFn } from '@adonisjs/core/types/http'
import jwt from 'jsonwebtoken'

export default class JwtAuthenticator {
  redirectTo = '/login'

  async handle({ request, response }: HttpContext, next: NextFn) {
    const authHeader = request.header('Authorization')
    if (!authHeader) {
      response.abort('Unauthorized!')
      response.status(401)
      return
    }
    const token = authHeader.split(' ')[1]
    if (!token) {
      response.abort('Unauthorized!')
      response.status(401)
      return
    }

    try {
      const { userId } = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload
      const session = Session.findBy('token', token)
      if (!session) {
        response.abort('Unauthorized!')
        response.status(401)
        return
      }
      return next()
    } catch (error) {
      response.status(401).send('Unauthorized')
    }
  }
}
