import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";

const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    // Sign in with google
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Sign in with email and password
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Observing the user
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser);
            console.log(currentUser);
        });

        return ()=> {
            return unsubscribe()
        }
    },[])

    const authInfo ={
        user,
        googleSignIn,
        userLogin,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;