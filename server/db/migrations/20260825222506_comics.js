/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('comics', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('writer')
    table.string('artist')
    table.string('main_character')
    table.string('publisher')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('comics')
}
