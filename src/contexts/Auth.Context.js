import React, { useContext, useEffect, useState } from "react";
import "../firebase";
import { getAuth, 
    createUserWithEmailAndPassword, 
    updateProfile, 
    signOut, 
    signInWithEmailAndPassword, 
    onAuthStateChanged} from "firebase/auth";

const AuthContext = React.createContext();

export function UseAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth , (user)=>{
            setCurrentUser(user);
            setLoading(false);
        })
        
        return unsubscribe;
    },[] );

    //signup function
     async function signup (email, password, username){
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        // update profile
        await updateProfile(auth.currentUser, {
            displayName: username
        });

        const user = auth.currentUser;
        setCurrentUser({
            ...user,
        });

    }

    //login function
    function login (email, password){
        const Auth = getAuth();
        return signInWithEmailAndPassword(Auth, email, password);
    } 

    //logout function
    function logout(){
        const Auth = getAuth();
        return signOut(Auth);
    }

    const value = {currentUser, signup, login, logout} 

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}