import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OrderService from 'App/Models/OrderService'

export default class OrderServicesController {
  public async index({ }: HttpContextContract) {
    const allOrderServices = await OrderService.all();

    return allOrderServices
  }

  public async create({ request }: HttpContextContract) {
    const data = request.only([
      'client_id',
      'user_id',
      'os_name',
      'os_problem',
      'os_latitude',
      'os_longitude',
      'status'
    ])



    const orderService = await OrderService.create(data);

    return orderService

  }

  public async store({ }: HttpContextContract) { }

  public async show({ params }: HttpContextContract) {
    const orderService = OrderService.findOrFail(params.id)

    return orderService
  }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
