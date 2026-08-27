import db from './connection'
import { Comic, ComicData } from '../../models/comics'

const columns = [
  'id',
  'name',
  'writer',
  'artist',
  'main_character',
  'publisher',
]
// TODO: GET ALL COMICS FROM THE DATABASE
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
export async function addComic(data: ComicData) {
  const result = await db('comics')
    .insert({
      name: data.name,
      writer: data.writer,
      artist: data.artist,
      main_character: data.mainCharacter,
      publisher: data.publisher,
    })
    .returning(columns)

  return result[0] as Comic
}
// TODO: DELETE A COMIC
export async function deleteComic(id: number) {
  return db('comics').where({ id }).del()
}
// TODO: UPDATE A COMIC
export async function updateComic(id: number, data: Partial<ComicData>) {
  const result = await db('comics')
    .where({ id })
    .update({
      name: data.name,
      writer: data.writer,
      artist: data.artist,
      main_character: data.mainCharacter,
      publisher: data.publisher,
    })
    .returning(columns)

  return result[0] as Comic
}
