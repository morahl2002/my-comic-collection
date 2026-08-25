import express from 'express'
import * as db from '../db/db.js'
const router = express.Router()

//TODO: http://localhost:3000/api/comics
router.get('/', async (req, res) => {
  const comics = await db.getAllComics()
  res.json({ comics })
})

// //TODO: http://localhost:3000/api/comics/:id
// router.get('/:id', (req, res) => {})

// //TODO: http://localhost:3000/api/comics
// router.post('/', (req, res) => {})

// //TODO: http://localhost:3000/api/comics/:id
// router.patch('/:id', (req, res) => {})

// //TODO: http://localhost:3000/api/comics/:id
// router.delete('/:id', (req, res) => {})

export default router
