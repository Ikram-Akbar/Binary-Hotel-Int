import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import { Button, Spinner } from "react-bootstrap";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                <span >Loading...</span>
            </Button>
        </div>
    }

    if (!user) {
        return < Navigate to="/login" replace />
    }
    return children;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};