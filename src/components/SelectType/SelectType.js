import './SelectType.scss'
import Button from 'react-bootstrap/Button'

export const SelectType = () => {
    return <div className='select'>
        <Button variant="outline-primary me-3">Create order request</Button>
        <Button variant="outline-primary">Create delivery request</Button>
    </div>
}