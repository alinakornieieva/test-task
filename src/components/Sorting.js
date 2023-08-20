import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { changeSorting } from '../redux/slice'

export const Sorting = () => {
    const { currentSorting } = useSelector((state) => state.requests)
    const dispatch = useDispatch()
    return <>
        <Button onClick={() => dispatch(changeSorting('Last created'))} variant={currentSorting === 'Last created' ? 'primary me-3' : 'outline-primary me-3'}>Last created</Button>
        <Button onClick={() => dispatch(changeSorting('Closest sending'))} variant={currentSorting === 'Closest sending' ? 'primary me-3' : 'outline-primary me-3'}>Closest sending</Button>
        <Button onClick={() => dispatch(changeSorting('Further sending'))} variant={currentSorting === 'Further sending' ? 'primary' : 'outline-primary'}>Further sending</Button>
    </>
}