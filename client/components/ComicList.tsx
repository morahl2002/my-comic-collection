import { useQuery } from '@tanstack/react-query'
import { getComics } from '../apis/comics'
import DeleteComic from './DeleteComic'
import EditComic from './EditComic'
import { useState } from 'react'
import Modal from './Modal'

function ComicList() {
  const [editingId, setEditingId] = useState<number | null>(null)
  const { data, isPending, isError } = useQuery({
    queryFn: () => getComics(),
    queryKey: ['comics'],
  })

  if (isPending) return <p>loading...</p>
  if (isError) return <p>Error</p>

  const editingComic = data.find((comic) => comic.id === editingId)

  return (
    <>
      <ul className="comic-grid">
        {data.map((comic) => (
          <li key={comic.id} className="comic-card">
            <img
              className="comic-cover"
              src={`https://placehold.co/300x300?text=${encodeURIComponent(comic.name)}`}
              alt=""
              aria-hidden="true"
            />
            <p className="comic-publisher">{comic.publisher}</p>
            <p className="comic-title">{comic.name}</p>
            <p className="comic-credits">
              {comic.writer} | {comic.artist}
            </p>
            <div className="comic-card-buttons">
              <DeleteComic id={comic.id} />
              <button
                onClick={() => setEditingId(comic.id)}
                aria-label={`Edit ${comic.name}`}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
      {editingComic && (
        <Modal title="Edit Comic" onClose={() => setEditingId(null)}>
          <EditComic
            comic={editingComic}
            onSuccess={() => setEditingId(null)}
          />
        </Modal>
      )}
    </>
  )
}

export default ComicList
