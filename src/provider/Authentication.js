import React, { useEffect, useState, useContext } from 'react';
// firebase
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../config/firebase-config';

const auth = getAuth(app);
const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        setLoading(false);
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };