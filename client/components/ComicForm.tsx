import { useState, FormEvent, ChangeEvent } from 'react'
import { ComicData } from '../../models/comics'

interface Props extends Partial<ComicData> {
  submitLabel: string
  onSubmit: (_: ComicData) => void
} // Change to Partial

export default function ComicForm({
  // add default values
  name = '',
  writer = '',
  artist = '',
  mainCharacter = '',
  publisher = '',
  submitLabel,
  onSubmit,
}: Props) {
  const [formState, setFormState] = useState({
    name,
    writer,
    artist,
    mainCharacter,
    publisher,
  })

  const handleChange = (
    evt: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = evt.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    onSubmit(formState)
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="name" className="label">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Comic name"
        onChange={handleChange}
        value={formState.name}
      />

      <label htmlFor="writer" className="label">
        Writer
      </label>
      <input
        type="text"
        id="writer"
        name="writer"
        placeholder="Writer"
        onChange={handleChange}
        value={formState.writer}
      />

      <label htmlFor="artist" className="label">
        Artist
      </label>
      <input
        type="text"
        id="artist"
        name="artist"
        placeholder="Artist"
        onChange={handleChange}
        value={formState.artist}
      />

      <label htmlFor="mainCharacter" className="label">
        Main Character
      </label>
      <input
        type="text"
        id="mainCharacter"
        name="mainCharacter"
        placeholder="Main character"
        onChange={handleChange}
        value={formState.mainCharacter}
      />

      <label htmlFor="publisher" className="label">
        Publisher
      </label>
      <input
        type="text"
        id="publisher"
        name="publisher"
        placeholder="Publisher"
        onChange={handleChange}
        value={formState.publisher}
      />

      <button>{submitLabel}</button>
    </form>
  )
}
