import express from 'express'
import * as db from '../db/db.js'
const router = express.Router()

//GET ALL
router.get('/', async (req, res) => {
  try {
    const comics = await db.getAllComics()
    res.json(comics)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

// GET BY ID
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

// ADD
router.post('/', async (req, res) => {
  try {
    const comic = await db.addComic(req.body)
    res.status(201).json(comic)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

// UPDATE
router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const comic = await db.updateComic(id, req.body)
    res.status(201).json(comic)
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error(error)
    }
    res.status(500).send('Something went wrong')
  }
})

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteComic(id)

    res.status(200).send()
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error(error)
    }
    res.status(500).send('Something went wrong')
  }
})

export default router
