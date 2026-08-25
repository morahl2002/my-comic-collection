export interface ComicData {
  id: number
  name: string
  writer: string
  artist: string
  mainCharacter: string
  publisher: string
}

export interface Comic extends ComicData {
  id: number
}
