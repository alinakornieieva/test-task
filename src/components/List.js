import { useDispatch, useSelector } from "react-redux"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { deleteItem } from "../redux/slice"
import { Sorting } from "./Sorting"
import { createSelector } from "@reduxjs/toolkit"

export const List = () => {
    const dispatch = useDispatch()
    const sortedItemsSelector = createSelector(
        (state) => state.requests.items,
        (state) => state.requests.currentSorting,
        (items, currentSorting) => {
            if (currentSorting === 'Last created') {
                return [...items].reverse()
            } else if (currentSorting === 'Closest sending') {
                const withoutDateItems = [...items].filter((item) => !item.date)
                const withDateItems = [...items].filter((item) => item.date).sort((a, b) => {
                    return Math.abs(Date.now() - new Date(a.date)) - Math.abs(Date.now() - new Date(b.date))
                })
                return [...withDateItems, ...withoutDateItems]
            } else if (currentSorting === 'Further sending') {
                const withoutDateItems = [...items].filter((item) => !item.date)
                const withDateItems = [...items].filter((item) => item.date).sort((a, b) => {
                    return Math.abs(Date.now() - new Date(b.date)) - Math.abs(Date.now() - new Date(a.date))
                })
                return [...withDateItems, ...withoutDateItems]
            }
        }
    )
    const sortedItems = useSelector(sortedItemsSelector)
    const convert = (date) => {
        date = date.split('-').reverse().join('.')
        return date
    }
    if (sortedItems.length < 1) {
        return <p className="h3 text-danger text-center mt-5">No requests</p>
    }
    return <Container className="my-5">
        <Sorting />
        <Row className="mt-3">
            {sortedItems.map(({ cityFrom, cityTo, request, type, date, description, id }) => <Col className="mb-3" lg={4} md={6} sm={12} key={id}>
                <Card>
                    <Card.Body>
                        <Card.Title>{cityFrom} - {cityTo}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Request: {request}</ListGroup.Item>
                        <ListGroup.Item>Type: {type}</ListGroup.Item>
                        {date && <ListGroup.Item> Date: {convert(date)}</ListGroup.Item>}
                        {description && <ListGroup.Item>Description: {description}</ListGroup.Item>}
                    </ListGroup>
                    <Card.Body>
                        <Button variant="primary me-2">Edit</Button>
                        <Button onClick={() => dispatch(deleteItem(id))} variant="danger">Delete</Button>
                    </Card.Body>
                </Card>
            </Col>)}
        </Row>
    </Container>
}