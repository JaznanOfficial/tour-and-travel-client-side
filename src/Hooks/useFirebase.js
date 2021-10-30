import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider,signInWithPopup, getAuth,onAuthStateChanged, signOut  } from "firebase/auth";
import initializeConfig from '../Firebase/Firebase.init';








initializeConfig();
const useFirebase = () => {
    
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true)

    const signInUsingGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
        
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])
    
    
    const logOut = () => {
        signOut(auth)
            .then(() => {
            
            })
    }

    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
        setIsLoading
};
};

export default useFirebase;