import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SpecialOffer_Card from "./SpecialOffer_Card"

const SpecialOffers = () => {
    const [allOffers, setAllOffers] = useState([]);
    const [visibleOffers, setVisibleOffers] = useState([]);
    const [loadMoreVisible, setLoadMoreVisible] = useState(true);

    const initialLoad = 6;
    const loadIncrement = 4;

    useEffect(() => {
        fetch("/public/specialOffers.json")
            .then((data) => data.json())
            .then((res) => {
                setAllOffers(res);
                setVisibleOffers(res.slice(0, initialLoad));
            })
            .catch((err) => console.log(err));
    }, []);

    const handleLoadMore = () => {
        const newVisibleOffers = visibleOffers.length + loadIncrement;
        if (newVisibleOffers >= allOffers.length) {
            setVisibleOffers(allOffers);
            setLoadMoreVisible(false);
        } else {
            setVisibleOffers(allOffers.slice(0, newVisibleOffers));
        }
    };


    return (
        <Container className="mb-5">
            <Row>
                <Col>
                    <div className="text-center py-4">
                        <h2 className="display-6 text-primary fw-bold">
                            Exclusive Special Offers Just for You!
                        </h2>
                        <p className="lead text-muted">
                            Discover amazing discounts and deals on your next stay. Don&apos;t miss out on these limited-time offers!
                        </p>
                    </div>
                </Col>
            </Row>
            <>
                {
                    allOffers.length < 0 ? <>
                    <Button >Loading... </Button>
                    </> : <>

                        <Row>
                            {visibleOffers.map((offer, idx) => (
                                <Col key={idx} md={4}>
                                    <SpecialOffer_Card offer={offer} />

                                </Col>
                            ))}

                        </Row>
                        {loadMoreVisible && (
                            <Row className="text-center mt-4">
                                <Col>
                                    <Button variant="primary" className="px-4 py-2" onClick={handleLoadMore}>
                                        Load More Offers
                                    </Button>
                                </Col>
                            </Row>
                        )}
                    </>
                }

            </>
        </Container>
    );
};

export default SpecialOffers;
