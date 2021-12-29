import React, { useState, useContext, createContext } from 'react';

import { app } from '../../config/firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const signIn = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(email, password)
            .then(res => {
                setCurrentUser(res.user);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    };

    const signUp = (email, password) => {
        setLoading(true);

        createUserWithEmailAndPassword(email, password)
            .then(res => {
                setCurrentUser(res.user);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
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
            error,
            loading,
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