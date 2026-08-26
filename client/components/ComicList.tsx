import { useQuery } from '@tanstack/react-query'
import { getComics } from '../apis/comics'
import DeleteComic from './DeleteComic'

function ComicList() {
  const { data, isPending, isError } = useQuery({
    queryFn: () => getComics(),
    queryKey: ['comics'],
  })

  if (isPending) return <p>loading...</p>
  if (isError) return <p>Error</p>

  return (
    <>
      {data.map((comic) => (
        <p key={comic.id}>
          <DeleteComic />
          {comic.name}
        </p>
      ))}
    </>
  )
}

export default ComicList
