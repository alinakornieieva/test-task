import { useDispatch, useSelector } from "react-redux"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { deleteItem } from "../../redux/slice"

export const List = () => {
    const { items } = useSelector((state) => state.requests)
    const dispatch = useDispatch()
    if (items.length < 1) {
        return <p className="h3 text-danger text-center mt-5">No requests</p>
    }
    return <Container className="my-5">
        <Row>
            {items.map((item) => <Col className="mb-3" lg={3} md={6} sm={12} key={item.id}>
                <Card>
                    <Card.Body>
                        <Card.Title>{item.cityFrom} - {item.cityTo}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Request: {item.request}</ListGroup.Item>
                        <ListGroup.Item>Type: {item.type}</ListGroup.Item>
                        <ListGroup.Item>Date: {item.date}</ListGroup.Item>
                        {item.description && <ListGroup.Item>Description: {item.description}</ListGroup.Item>}
                    </ListGroup>
                    <Card.Body>
                        <Button variant="primary me-2">Edit</Button>
                        <Button onClick={() => dispatch(deleteItem(item.id))} variant="danger">Delete</Button>
                    </Card.Body>
                </Card>
            </Col>)}
        </Row>
    </Container>
}