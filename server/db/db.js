import db from './connection'

// TODO: GET ALL COMICS FROM THE DATABASE

export function getAllComics() {
  return db('comics').select()
}
// TODO: GET ALL COMICS FROM THE DATABASE BY ID
export function getComicById(id) {
  return db('comics').where({ id }).select().first
}
// TODO: CREATE A COMIC
export function addComic(comic) {
  return db('comics').insert(comic)
}
// TODO: DELETE A COMIC
export function deleteComic(id) {
  return db('comics').where({ id }).del()
}
// TODO: UPDATE A COMIC
export function updateComic(id, obj) {
  return db('comics').where({ id }).update(obj)
}
