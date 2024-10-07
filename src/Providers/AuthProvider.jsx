import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import PropTypes from "prop-types";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);
const google_provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    


    const register_with_email_password = (email, password) => {
        if (user) {
            return toast.error("Logout please");
        }
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Sign out the user after registration to prevent automatic login
                return signOut(auth)
                    .then(() => {
                        toast.success("User registered successfully. Please login.");
                    })
                    .catch((err) => {
                        toast.error(err.message);
                    });
            });
    };

    const login_with_email_password = (email, password) => {
        if (user) {
            return toast.error("Logout please");
        }
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const login_with_google = () => {
        if (user) {
            return toast.error("Logout please");
        }
        setLoading(true);
        return signInWithPopup(auth, google_provider);
    };
    const logout_current_user = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const value = {
        user,
        loading,
        register_with_email_password,
        login_with_google,
        login_with_email_password,
        logout_current_user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
};
