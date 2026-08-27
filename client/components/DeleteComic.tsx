import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteComic } from '../apis/comics'

interface Props {
  id: number
}

function DeleteComic(props: Props) {
  const queryClient = useQueryClient()

  const deleteMutation = useMutation({
    mutationFn: () => deleteComic(props.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comics'] })
    },
  })
  const handleClick = () => {
    console.log(props.id)
    deleteMutation.mutate()
  }
  return (
    <>
      <button onClick={handleClick}>Delete</button>
    </>
  )
}

export default DeleteComic
