import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OrderServices extends BaseSchema {
  protected tableName = 'order_services'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('client_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('clients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('os_name', 60).notNullable()
      table.string('os_problem').notNullable()
      table.string('status').notNullable()
      table.decimal('os_latitude', 9, 6).notNullable()
      table.decimal('os_longitude', 9, 6).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
