import React, { useState, useContext, createContext } from 'react';

import { app } from '../config/firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const AuthContext = createContext();
const auth = getAuth();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [message, setMessage] = useState(null);

    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setCurrentUser(res.user.uid);
                sessionStorage.setItem('authToken', res._tokenResponse.refreshToken);
                setMessage(res.code)
            })
            .catch(err => {
                setMessage(err.code);
            });
    };

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                setCurrentUser(res.user.uid);
                sessionStorage.setItem('authToken', res._tokenResponse.refreshToken);
                setMessage(res.code)
            })
            .catch(err => {
                setMessage(err.code);
            });
    };

    const signOut = () => {
        app.auth().signOut();
        setCurrentUser(null);
    };

    const updateUser = (user) => {
        setCurrentUser(user);
    };

    return (
        <AuthContext.Provider value={{
            currentUser,
            message,
            signIn,
            signUp,
            signOut,
            updateUser
        }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
}

export { AuthProvider, useAuth };