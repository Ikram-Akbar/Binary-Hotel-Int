import React, { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";
import PropTypes from "prop-types";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext(null);
const google_provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const register_with_email_password = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login_with_email_password = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const login_with_google = () => {
        return signInWithPopup(auth, google_provider);
    };

    const value = {
        register_with_email_password,
        login_with_google,
        login_with_email_password,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
};
