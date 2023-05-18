import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";

const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // Sign in with google
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // Sign in with email and password
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Log Out
    const logOut = () => {
        return signOut(auth);
    }

    // Observing the user
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        });

        return ()=> {
            return unsubscribe()
        }
    },[])

    const authInfo ={
        user,
        loading,
        googleSignIn,
        userLogin,
        createUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;