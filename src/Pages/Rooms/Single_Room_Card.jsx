import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaStar, FaWifi, FaBed, FaBath, FaCity, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Single_Room_Card = ({ room }) => {
 
    return (
        <Card >
            <Card.Img style={{height:"200px"}} variant="top" className='rounded ' src={room.imageUrl} alt={room.roomName} />
            <Card.Body>
                <Card.Title className='fw-bold text-primary'>{room.roomName}</Card.Title>
                <Card.Text>
                    <strong>Price per Night:</strong> ${room.pricePerNight} <br />
                    <strong>Rating:</strong> {room.rating} <FaStar style={{ color: 'gold' }} />
                </Card.Text>
            </Card.Body>
                <Card.Footer className='d-flex justify-content-center'>
                    <Button className='fw-semibold' variant="primary">
                        View Details
                    </Button>
                </Card.Footer>
        </Card>
    );
};

export default Single_Room_Card;
