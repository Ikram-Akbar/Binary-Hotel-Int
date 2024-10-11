import React, { useContext, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Image,
  ListGroup,
  Offcanvas,
} from "react-bootstrap";
import { AuthContext } from "../../Providers/AuthProvider";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GoUnverified } from "react-icons/go";
import { Link } from "react-router-dom";

const OffCanvas_User = ({ placement }) => {
  const imgURL = "https://placehold.co/600x400";
  const { user, logout_current_user } = useContext(AuthContext);
  // console.log(user);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handle_LogOut = () => {
    logout_current_user();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Profile
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement={placement}>
        <Card>
          <Image
            roundedCircle
            variant="top"
            className="w-25 mx-auto my-2"
            src={user?.photoURL || imgURL}
          />
          <Card.Body>
            <Card.Title className="text-center fw-bold text-primary">
              {user?.displayName || "Demo User"}{" "}
              {user.emailVerified ? (
                <MdOutlineVerifiedUser />
              ) : (
                <GoUnverified />
              )}
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush fw-semibold">
            <ListGroup.Item> email : {user.email}</ListGroup.Item>
            <ListGroup.Item> uid : {user.uid}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link as={Button} onClick={handle_LogOut}>
              Logout
            </Card.Link>
            <Card.Link as={Link} to="/admin/">
              Go To Admin Dashboard
            </Card.Link>
          </Card.Body>
        </Card>
      </Offcanvas>
    </div>
  );
};

export default OffCanvas_User;
