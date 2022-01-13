import React, { useState, useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { app } from '../config/firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

import { postToFireStore } from '../api/database';

const AuthContext = createContext();
const auth = getAuth();

const AuthProvider = ({ children }) => {
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
                    setMessage(res);
                    setIsLoading(false);
                }).then(() => navigate('/home')).catch(err => {
                    setMessage(err.code);
                    setIsLoading(false);
                });
        } catch (err) {
            setMessage(err);
        }
    };

    const signUp = (email, password, firstName, lastName, plate) => {
        setIsLoading(true);
        // check whether email and password is string
        if (typeof email !== 'string' || typeof password !== 'string') {
            setMessage('Email and password must be string');
            return;
        }
        let data = {
            firstName: firstName || '',
            lastName: lastName || '',
            plate: plate || '',
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                sessionStorage.setItem('authToken', res._tokenResponse.refreshToken);
                data.id = res.user.uid || '';
                postToFireStore('users', data)
                setMessage(res);
                setIsLoading(false);
            })
            .then(() => navigate('/home')).catch(err => {
                setMessage(err.code);
                setIsLoading(false);
            });
    };

    const signOut = () => {
        auth.signOut()
        sessionStorage.removeItem('authToken')
        navigate('/login');
    };

    const updateUser = (user) => {
        sessionStorage.clear('authToken')
    };

    return (
        <AuthContext.Provider value={{
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