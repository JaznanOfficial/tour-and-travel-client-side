import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider,signInWithPopup, getAuth,onAuthStateChanged, signOut  } from "firebase/auth";
import initializeConfig from '../Firebase/Firebase.init';








initializeConfig();
const useFirebase = () => {
    
    const auth = getAuth();

    const [user, setUser] = useState({});

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
        logOut
};
};

export default useFirebase;