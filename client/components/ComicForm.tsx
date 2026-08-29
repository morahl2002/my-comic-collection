import { useId, useState, FormEvent, ChangeEvent } from 'react'
import { ComicData } from '../../models/comics'

interface Props extends Partial<ComicData> {
  submitLabel: string
  onSubmit: (_: ComicData) => void
}

// !! FOR ASSESSMENT CP02 REFACTORING !! //
// Replaces five duplicated code blocks with a single
// fields array + .map()

const fields: { key: keyof ComicData; label: string; placeholder: string }[] = [
  // AI was used to fill in these objects to save time
  { key: 'name', label: 'Name', placeholder: 'Comic name' },
  { key: 'writer', label: 'Writer', placeholder: 'Writer' },
  { key: 'artist', label: 'Artist', placeholder: 'Artist' },
  {
    key: 'mainCharacter',
    label: 'Main Character',
    placeholder: 'Main character',
  },
  { key: 'publisher', label: 'Publisher', placeholder: 'Publisher' },
]

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
  // wave came up with error for multiple form labels
  // import useId hook to create unique ids for form control
  const id = useId()
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
    // FOR ASSESSMENT CPO2 REFACTORING
    // Creaing a map instead of writing five similar blocks of code
    <form onSubmit={handleSubmit} className="form">
      {fields.map((field) => (
        <div key={field.key}>
          <label htmlFor={`${id}-${field.key}`} className="label">
            {field.label}
          </label>
          <input
            type="text"
            id={`${id}-${field.key}`}
            name={field.key}
            placeholder={field.placeholder}
            onChange={handleChange}
            value={formState[field.key]}
          />
        </div>
      ))}
      <button>{submitLabel}</button>
    </form>
  )
}
