import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, changeType } from '../redux/slice'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Row from 'react-bootstrap/Row'


export const RequestForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { type: URLType } = useParams()
    const { type } = useSelector((state) => state.requests)
    useEffect(() => {
        if (URLType !== 'delivery' && URLType !== 'order') {
            navigate('/create')
        }
        if (type !== URLType) {
            dispatch(changeType(URLType))
        }
    }, [])
    const [cityFrom, setCityFrom] = useState('')
    const [cityTo, setCityTo] = useState('')
    const [date, setDate] = useState('')
    const [typeOfParcel, setTypeOfParcel] = useState('gadgets')
    const [description, setDescription] = useState('')
    const [validated, setValidated] = useState(false)
    const handleSubmit = (event) => {
        const form = event.currentTarget
        event.preventDefault()
        if (form.checkValidity() === true) {
            dispatch(addItem({ id: Date.now(), request: type, cityFrom, cityTo, date, description, type: typeOfParcel }))
            navigate('/requests')
        }
        setValidated(true)
    }
    return (
        <Form className='container my-5' noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>The city from which the parcel is sent</Form.Label>
                    <Form.Control
                        value={cityFrom}
                        onChange={(e) => setCityFrom(e.target.value)}
                        required
                        type="text"
                    />
                    <Form.Control.Feedback type="invalid">
                        This field is required
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>The city to which the parcel is sent</Form.Label>
                    <Form.Control
                        value={cityTo}
                        onChange={(e) => setCityTo(e.target.value)}
                        required
                        type="text"
                    />
                    <Form.Control.Feedback type="invalid">
                        This field is required
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Date of dispatch</Form.Label>
                    <Form.Control value={date}
                        onChange={(e) => setDate(e.target.value)} type="date" placeholder="Date of dispatch" />
                </Form.Group>
                {type === 'delivery' || <Form.Group as={Col} md="6" controlId="validationCustom04">
                    <Form.Label>Type of parce</Form.Label>
                    <Form.Select value={typeOfParcel}
                        onChange={(e) => setTypeOfParcel(e.target.value)}>
                        <option value="gadgets">gadgets</option>
                        <option value="drinks">drinks</option>
                        <option value="clothes">clothes</option>
                        <option value="medicines">medicines</option>
                        <option value="other">other</option>
                    </Form.Select>
                </Form.Group>
                }
            </Row>
            {type === 'delivery' || <Form.Group className="mb-3">
                <FloatingLabel controlId="floatingTextarea2" label="Description">
                    <Form.Control value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        as="textarea"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
            </Form.Group>}
            <Button type="submit">Submit form</Button>
        </Form>
    )
}
