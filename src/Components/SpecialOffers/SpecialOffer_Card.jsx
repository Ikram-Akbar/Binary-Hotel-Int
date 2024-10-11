import PropTypes from 'prop-types';
import { Card, Badge } from 'react-bootstrap';
import { FaTag, FaCalendarAlt } from 'react-icons/fa';

const SpecialOffer_Card = ({ offer }) => {
    const { description, img, title, validUntil } = offer;

    return (
        <Card className="mb-4 text-center" >
            <Card.Img style={{ height: '200px' }} variant="top" src={img} alt={title} rounded="true"/>
            <Card.Body>
                <Card.Title className="fw-bold text-primary">
                    <FaTag className="me-2" /> {title}
                </Card.Title>
                <Card.Text className="text-muted">
                    {description}
                </Card.Text>
                <Card.Text className="text-muted" >
                    <FaCalendarAlt className="me-2" />
                    <Badge bg="light" text="dark">
                        Valid Until: {validUntil}
                    </Badge>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SpecialOffer_Card;

SpecialOffer_Card.propTypes = {
    offer: PropTypes.shape({
        description: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        validUntil: PropTypes.string.isRequired,
    }).isRequired,
};
