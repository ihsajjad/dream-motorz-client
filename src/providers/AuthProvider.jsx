import { createContext } from "react";
import app from "../firebase/firebase.config";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";

const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    
    // Sign in with google
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const authInfo ={
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;