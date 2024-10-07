import { useContext } from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import OffCanvas_User from '../OffCanvas/OffCanvas_User';

const NavigationBar = () => {
    const placement = "end";
    const { user } = useContext(AuthContext);
    console.log(user);

    const brandName = "Hotel Binary INT";
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
        <Navbar className='sticky-top shadow-sm' bg="light" expand="lg" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 text-primary">
                    {brandName}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mx-auto">
                        {navItems.map((item, index) => (
                            <Nav.Link key={index} as={Link} to={item.path} className="fs-6 px-4">
                                {item.label}
                            </Nav.Link>
                        ))}
                        <NavDropdown title="About Us" id="nav-dropdown" className="fs-6 px-4">
                            {aboutItems.map((item, index) => (
                                <NavDropdown.Item key={index} as={Link} to={item.path}>
                                    {item.label}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                    {
                        user ? (
                            <>
                                <OffCanvas_User placement="end" />
                            </>
                        ) : (
                            <>
                                <Button variant="primary" className="ms-3" as={Link} to="/login">
                                    Login
                                </Button>
                            </>
                        )
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default NavigationBar;
