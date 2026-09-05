import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addComic } from '../apis/comics'
import { ComicData } from '../../models/comics'
import ComicForm from './ComicForm'

function AddComic({ onSuccess }: { onSuccess?: () => void }) {
  const queryClient = useQueryClient()

  const addMutation = useMutation({
    mutationFn: (data: ComicData) => addComic(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comics'] })
      onSuccess?.()
    },
  })

  return (
    <ComicForm
      submitLabel="Add"
      onSubmit={(data) => addMutation.mutate(data)}
    />
  )
}

export default AddComic
