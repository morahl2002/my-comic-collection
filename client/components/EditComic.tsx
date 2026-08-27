import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateComic } from '../apis/comics'
import { Comic, ComicData } from '../../models/comics'
import ComicForm from './ComicForm'

// id isn't part of ComicData = take full Comic here
// pass id separately to mutation
function EditComic({ comic }: { comic: Comic }) {
  const queryClient = useQueryClient()

  const updateMutation = useMutation({
    mutationFn: (data: ComicData) => updateComic(comic.id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comics'] })
    },
  })

  return (
    <ComicForm
      name={comic.name}
      writer={comic.writer}
      artist={comic.artist}
      mainCharacter={comic.mainCharacter}
      publisher={comic.publisher}
      submitLabel="Update"
      onSubmit={(data) => updateMutation.mutate(data)}
    />
  )
}

export default EditComic
