import { GithubAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
export const authContext = createContext(null);

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const authenticationWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const authenticationWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser);
                console.log('inside useEffect in provider',currentUser);
                setLoading(false);
            }
        })
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user, loading, setLoading, authenticationWithGoogle, authenticationWithGithub
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    )
};

export default AuthProvider;