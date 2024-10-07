import { useEffect, useState } from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import { FaCalendarAlt, FaClock, FaMoneyBillWave } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/events.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    centerPadding: "30px", // Reduced padding
    slidesToShow: 4,
    speed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div>
      <Container fluid className="mb-5">
        <Row>
          <Col>
            <div className="text-center py-4">
              <h2 className=" text-primary fw-bold">
                Upcoming Events
              </h2>
              <p className="lead text-muted">
                Experience unforgettable moments at our upcoming events!
              </p>
            </div>
            <div className="slider-container " style={{ overflowX: "hidden" }}>
              <Slider {...settings}>
                {events.map((event) => (
                  <div key={event.id} style={{ padding: "20px" }}>
                    <Card className=" border h-100 mx-2 text-center ">
                      <Card.Body className="d-flex flex-column justify-content-between">
                        <Card.Title className="text-dark fw-bold">
                          {event.name}
                        </Card.Title>
                        <Card.Text className="text-muted">
                          <FaCalendarAlt className="me-2 text-primary" />{" "}
                          {event.date}
                          <br />
                          <FaClock className="me-2 text-primary" /> {event.time}
                          <br />
                          <FaMoneyBillWave className="me-2 text-primary" />{" "}
                          {event.price}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="bg-transparent border-0">
                        <Button
                          as={Link}
                          to={`/events/${event.id}`}
                          variant="outline-primary"
                        >
                          View Details
                        </Button>
                      </Card.Footer>
                    </Card>
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Events;
