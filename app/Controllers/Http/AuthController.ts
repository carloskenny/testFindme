import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
    public async login({ auth, request, response }: HttpContextContract) {
        const data = request.only(['email', 'password'])

        try {
            const token = await auth.use('api').attempt(data.email, data.password)
            return token
        } catch {
            return response.badRequest('Invalid credentials')

        }
    }
}
