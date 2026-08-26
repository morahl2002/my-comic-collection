import express from 'express'
import * as db from '../db/db.js'
const router = express.Router()

//TODO: http://localhost:3000/api/comics
router.get('/', async (req, res) => {
  try {
    const comics = await db.getAllComics()
    res.json(comics)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

// //TODO: http://localhost:3000/api/comics/:id
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const comic = await db.getComicById(id)
    res.json(comic)
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error(error)
    }
    res.status(500).send('Something went wrong')
  }
})

// //TODO: http://localhost:3000/api/comics
// router.post('/', (req, res) => {})

// //TODO: http://localhost:3000/api/comics/:id
// router.patch('/:id', (req, res) => {})

// //TODO: http://localhost:3000/api/comics/:id
// router.delete('/:id', (req, res) => {})

export default router
