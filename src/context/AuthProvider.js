import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current logged in', currentUser)
            setUser(currentUser)
        })
        return () => {
            return unsubscribe()
        }
    },[])

    const authInfo = {
        signInWithGoogle,
        user,
    }

    return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;