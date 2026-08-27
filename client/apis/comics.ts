import request from 'superagent'
import { Comic, ComicData } from '../../models/comics'

const rootURL = new URL('/api/v1', document.baseURI)

// GET ALL COMICS FROM MY API
export async function getComics() {
  const response = await request.get(`${rootURL}/comics`)
  return response.body as Comic[]
}

// DELETE COMIC FROM MY API
export async function deleteComic(id: number) {
  await request.delete(`${rootURL}/comics/${id}`)
}

// CREATE NEW COMIC
export async function addComic(comic: ComicData) {
  const response = await request.post(`${rootURL}/comics`).send(comic)
  return response.body as Comic
}
