import request from 'superagent'
import { Comic } from '../../models/comics'

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
