import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';



export default class UsersController {
    public async index() {
        const allUsers = await User.all();

        return allUsers;
    }

    public async create({ request }: HttpContextContract) {
        const data = request.only(['user_name', 'email', 'password']);

        const user = await User.create(data);

        return user;
    }

}
