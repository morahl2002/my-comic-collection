import request from 'superagent'
import { Comic } from '../../models/comics'

const rootURL = new URL('/api/v1', document.baseURI)

export async function getComics() {
  const response = await request.get(`${rootURL}/comics`)
  return response.body as Comic[]
}
