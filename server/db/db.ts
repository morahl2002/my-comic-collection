import db from './connection'
import { Comic } from '../../models/comics'
// TODO: GET ALL COMICS FROM THE DATABASE

const columns = [
  'id',
  'name',
  'writer',
  'artist',
  'main_character',
  'publisher',
]

export async function getAllComics() {
  const result = await db('comics')
    .select(...columns)
    .orderBy('id')
  console.log(result)
  return result as Comic[]
}
// TODO: GET ALL COMICS FROM THE DATABASE BY ID
export async function getComicById(id: number) {
  const result = await db('comics')
    .select(...columns)
    .orderBy('id')
    .where({ id })
    .first()
  console.log(result)
  return result as Comic
}
// TODO: CREATE A COMIC
export async function addComic(comic) {
  return db('comics').insert(comic)
}
// TODO: DELETE A COMIC
export async function deleteComic(id) {
  return db('comics').where({ id }).del()
}
// TODO: UPDATE A COMIC
export async function updateComic(id, obj) {
  return db('comics').where({ id }).update(obj)
}
