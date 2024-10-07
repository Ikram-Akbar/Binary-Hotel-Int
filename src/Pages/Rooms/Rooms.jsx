import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaBed, FaWifi, FaBath, FaTv } from 'react-icons/fa';

const roomsData = [
    {
        id: 1,
        type: 'Deluxe Room',
        price: '$120/night',
        img: 'https://via.placeholder.com/300x200',
        amenities: ['Free Wi-Fi', 'Television', 'Private Bathroom'],
    },
    {
        id: 2,
        type: 'Suite',
        price: '$200/night',
        img: 'https://via.placeholder.com/300x200',
        amenities: ['Free Wi-Fi', 'Television', 'King Size Bed', 'Private Bathroom'],
    },
    {
        id: 3,
        type: 'Standard Room',
        price: '$90/night',
        img: 'https://via.placeholder.com/300x200',
        amenities: ['Free Wi-Fi', 'Television', 'Private Bathroom'],
    },
];

const Rooms = () => {
    return (
        <Container className="py-5">
            <h2 className="text-center text-primary fw-bold mb-4">Our Rooms</h2>
            <Row>
                {roomsData.map((room) => (
                    <Col md={4} key={room.id} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={room.img} alt={room.type} />
                            <Card.Body>
                                <Card.Title className="fw-bold">
                                    <FaBed className="text-primary me-2" />
                                    {room.type}
                                </Card.Title>
                                <Card.Text className="text-muted">
                                    <FaBath className="me-2" />
                                    {room.amenities.includes('Private Bathroom') && 'Private Bathroom'}
                                </Card.Text>
                                <Card.Text className="text-muted">
                                    <FaWifi className="me-2" /> Free Wi-Fi
                                    {room.amenities.includes('Television') && ' | '}
                                    {room.amenities.includes('Television') && (
                                        <>
                                            <FaTv className="me-2" /> Television
                                        </>
                                    )}
                                </Card.Text>
                                <Card.Text className="fw-bold text-success">{room.price}</Card.Text>
                                <Button variant="primary" className="w-100">
                                    Book Now
                                </Button>
                            </Card.Body>
                            <Card.Footer>
                                <Badge bg="success">Best Price Guaranteed</Badge>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Rooms;
