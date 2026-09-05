import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateComic } from '../apis/comics'
import { Comic, ComicData } from '../../models/comics'
import ComicForm from './ComicForm'

// id isn't part of ComicData = take full Comic here
// pass id separately to mutation
// add onSuccess
function EditComic({
  comic,
  onSuccess,
}: {
  comic: Comic
  onSuccess?: () => void
}) {
  const queryClient = useQueryClient()

  const updateMutation = useMutation({
    mutationFn: (data: ComicData) => updateComic(comic.id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comics'] })
      onSuccess?.()
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
