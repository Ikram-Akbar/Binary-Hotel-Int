import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Single_Room_Card from './Single_Room_Card';

const Rooms = () => {
    const roomsData = useLoaderData();

    // State to manage filter options
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [minRating, setMinRating] = useState(0);

    // Handler to update price range
    const handlePriceChange = (e) => {
        const [min, max] = e.target.value.split(',').map(Number);
        setPriceRange([min, max]);
    };

    // Handler to update rating
    const handleRatingChange = (e) => {
        setMinRating(Number(e.target.value));
    };

    // Filter logic for rooms
    const filteredRooms = roomsData.filter(
        (room) => room.pricePerNight >= priceRange[0] && room.pricePerNight <= priceRange[1] && room.rating >= minRating
    );

    return (
        <Container className="py-5">
            <h2 className="text-center text-primary fw-bold mb-4">Our Rooms</h2>
            <Row>
                <Col md={2} className=" text-center p-3">
                    <h5>Filter by:</h5>

                    {/* Price Range Filter */}
                    <Form.Group className="mb-3">
                        <Form.Label>Price Range</Form.Label>
                        <Form.Control
                            type="range"
                            min="0"
                            max="1000"
                            step="50"
                            value={priceRange}
                            onChange={handlePriceChange}
                        />
                        <p>${priceRange[0]} - ${priceRange[1]}</p>
                    </Form.Group>

                    {/* Rating Filter */}
                    <Form.Group className="mb-3">
                        <Form.Label>Minimum Rating</Form.Label>
                        <Form.Control
                            type="number"
                            min="0"
                            max="5"
                            step="0.1"
                            value={minRating}
                            onChange={handleRatingChange}
                        />
                        <p>{minRating} ⭐ or higher</p>
                    </Form.Group>

                    <Button variant="light" className="w-100 mt-3">Apply Filters</Button>
                </Col>

                <Col md={10} className="px-5">
                    <Row>
                        {filteredRooms.map((room) => (
                            <Col md={4} key={room.id} className="mb-4">
                                <Single_Room_Card room={room} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Rooms;
