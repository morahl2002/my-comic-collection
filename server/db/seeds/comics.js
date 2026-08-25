/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('comics').del()
  await knex('comics').insert([
    {
      id: 1,
      name: 'Supergirl: Woman of Tomorrow',
      writer: 'Tom King',
      artist: 'Bilquis Evely',
      main_character: 'Supergirl',
      publisher: 'DC Comics',
    },
    {
      id: 2,
      name: 'Zatanna: Bring Down the House',
      writer: 'Mariko Tamaki',
      artist: 'Javier Rodríguez',
      main_character: 'Zatanna Zatara',
      publisher: 'DC Comics',
    },
    {
      id: 3,
      name: 'Poison Ivy, Vol. 1: The Virtuous Cycle',
      writer: 'G. Willow Wilson',
      artist: 'Marcio Takara',
      main_character: 'Poison Ivy',
      publisher: 'DC Comics',
    },
    {
      id: 4,
      name: 'Absolute Wonder Woman, Vol. 1: The Last Amazon',
      writer: 'Kelly Thompson',
      artist: 'Hayden Sherman',
      main_character: 'Wonder Woman',
      publisher: 'DC Comics',
    },
    {
      id: 5,
      name: 'Absolute Wonder Woman, Vol. 2: As My Mothers Made Me',
      writer: 'Kelly Thompson',
      artist: 'Hayden Sherman',
      main_character: 'Wonder Woman',
      publisher: 'DC Comics',
    },
  ])
}
