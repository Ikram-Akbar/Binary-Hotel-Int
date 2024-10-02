import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const NavigationBar = () => {
    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/rooms', label: 'Rooms' },
        { path: '/booking', label: 'Booking' },
    ];

    const aboutItems = [
        { path: '/about', label: 'Our Story' },
        { path: '/contact', label: 'Contact Us' },
    ];
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Binary Hotel Int
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {navItems.map((item, index) => (
                                <Nav.Link key={index} as={Link} to={item.path}>
                                    {item.label}
                                </Nav.Link>
                            ))}
                            <NavDropdown title="About Us" id="basic-nav-dropdown">
                                {aboutItems.map((item, index) => (
                                    <NavDropdown.Item key={index} as={Link} to={item.path}>
                                        {item.label}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        </Nav>
                        <Button variant="outline-primary" as={Link} to="/login">
                            Login
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;
