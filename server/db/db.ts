import db from './connection'
import { Comic, ComicData } from '../../models/comics'

const columns = [
  'id',
  'name',
  'writer',
  'artist',
  'main_character',
  'publisher',
  'cover_url as coverUrl',
]

async function getCoverUrl(name: string): Promise<string | null> {
  const url = `https://comicvine.gamespot.com/api/search/?api_key=${process.env.COMICVINE_API_KEY}&format=json&query=${encodeURIComponent(name)}&resources=volume`
  const response = await fetch(url, {
    headers: { 'User-Agent': 'my-fullstack-collection' }, // ComicVine api needs a user agent
  })
  const data = await response.json()
  // return data.results?.[0]?.image?.original_url ?? null
  // medium_url used for cards rather than full sized display to alleviate loading size
  return data.results?.[0]?.image?.medium_url ?? null
}

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
  const coverUrl = await getCoverUrl(data.name)
  const result = await db('comics')
    .insert({
      name: data.name,
      writer: data.writer,
      artist: data.artist,
      main_character: data.mainCharacter,
      publisher: data.publisher,
      cover_url: coverUrl,
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
