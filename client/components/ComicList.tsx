import { useQuery } from '@tanstack/react-query'
import { getComics } from '../apis/comics'
import DeleteComic from './DeleteComic'
import EditComic from './EditComic'
import { useState } from 'react'

function ComicList() {
  const [editingId, setEditingId] = useState<number | null>(null)
  const { data, isPending, isError } = useQuery({
    queryFn: () => getComics(),
    queryKey: ['comics'],
  })

  if (isPending) return <p>loading...</p>
  if (isError) return <p>Error</p>

  return (
    <ul className="comic-list">
      {data.map((comic) =>
        editingId === comic.id ? (
          <li key={comic.id} className="comic-row comic-row-editing">
            <EditComic comic={comic} onSuccess={() => setEditingId(null)} />
            <button onClick={() => setEditingId(null)}>Cancel</button>
          </li>
        ) : (
          <li key={comic.id} className="comic-row">
            <DeleteComic id={comic.id} />
            <button onClick={() => setEditingId(comic.id)}>Edit</button>
            {comic.name}
          </li>
        ),
      )}
    </ul>
  )
}

export default ComicList
