import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import { GetUserRole } from "../Hooks/GetUserRole";
import app from '../firebase/firebase.init';
export const authContext = createContext(null);

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);
    const [userRole, setUserRole] = useState('');
    const [user, setUser] = useState(null);
    const [userRoleLoading, setUserRoleLoading] = useState(true);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOutUser = () => {
        return signOut(auth);
    }

    const authenticationWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const authenticationWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }
    useEffect(() => {
        if(user){
            GetUserRole(user.email)
            .then(data => {
                setUserRole(data);
                setUserRoleLoading(false);
            })
        }
    }, [user]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
                setLoading(false);
        })
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user, loading, setLoading, createUser, logInUser, authenticationWithGoogle, authenticationWithGithub, logOutUser, processing, setProcessing, userRole, userRoleLoading
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    )
};

export default AuthProvider;