import React, { useState, useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { app } from '../config/firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const AuthContext = createContext();
const auth = getAuth();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const signIn = (email, password) => {
        // check whether email nd password is string
        setIsLoading(true);
        if (typeof email !== 'string' || typeof password !== 'string') {
            setMessage('Email and password must be string');
            return;
        }
        try {
            signInWithEmailAndPassword(auth, email, password)
                .then(res => {
                    sessionStorage.setItem('authToken', res._tokenResponse.refreshToken);
                    setCurrentUser(res.user.uid);
                    setMessage(res);
                }).then(() => navigate('/home')).catch(err => {
                    setMessage(err.code);
                });
        } catch (err) {
            setMessage(err);
        }
        setIsLoading(false);
    };

    const signUp = (email, password) => {
        setIsLoading(true);
        // check whether email and password is string
        if (typeof email !== 'string' || typeof password !== 'string') {
            setMessage('Email and password must be string');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                sessionStorage.setItem('authToken', res._tokenResponse.refreshToken);
                setCurrentUser(res.user.uid);
                setMessage(res);
            }).then(() => navigate('/home')).catch(err => {
                setMessage(err.code);
            });
        setIsLoading(false);
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
            isLoading,
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