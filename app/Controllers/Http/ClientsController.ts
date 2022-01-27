import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client';

export default class ClientsController {

    /** retornar todos os clientes **/
    public async index() {
        const allClients = await Client.all();

        return allClients;

    }

    public async create({ request }: HttpContextContract) {
        const data = request.only(['client_name']);

        const client = await Client.create(data);

        return client;
    }
}
