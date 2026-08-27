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
    <>
      {data.map((comic) =>
        editingId === comic.id ? (
          <div key={comic.id}>
            <EditComic comic={comic} />
            <button onClick={() => setEditingId(null)}>Cancel</button>
          </div>
        ) : (
          <p key={comic.id}>
            <DeleteComic id={comic.id} />
            <button onClick={() => setEditingId(comic.id)}>Edit</button>
            {comic.name}
          </p>
        ),
      )}
    </>
  )
}

export default ComicList
