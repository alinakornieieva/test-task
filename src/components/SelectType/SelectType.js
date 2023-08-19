import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { changeType } from '../../redux/slice'
import Button from 'react-bootstrap/Button'
import './SelectType.scss'

export const SelectType = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = (type) => {
        dispatch(changeType(type))
        navigate(`/create/${type}`)
    }
    return <div className='select'>
        <Button onClick={() => handleClick('order')} variant="outline-primary me-3">Create order request</Button>
        <Button onClick={() => handleClick('delivery')} variant="outline-primary">Create delivery request</Button>
    </div>
}