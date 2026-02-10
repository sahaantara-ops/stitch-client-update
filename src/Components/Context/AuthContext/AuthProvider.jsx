import React, { useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';
import { sendPasswordResetEmail } from 'firebase/auth';
import { setPersistence, browserLocalPersistence } from "firebase/auth";
import { useState } from 'react';
import { Navigate } from "react-router-dom";






const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const[loading,setLoading] = useState(true)


    useEffect(() => {
    setPersistence(auth, browserLocalPersistence).catch(console.error);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

   const registerUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email, password)
   }
   const signInUser =(email, password)=>{
    setLoading(true)
      return signInWithEmailAndPassword(auth, email, password);
   }
  
   const signInGoogle= () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
   }

  const logOut =() =>  {
    setLoading(true);
    return signOut(auth);
  }

  const updateUserProfile = (profile)=>{
    return updateProfile(auth.currentUser, profile )
  }
  const resetPassword = (email) => {
  setLoading(true);
  return sendPasswordResetEmail(auth, email);
};

  useEffect (()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      console.log("Firebase currentUser:", currentUser);
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser?.email)
    })
    return ()=>{
      unSubscribe();
    
    }
   },[])
//  if (loading) {
//   return <div>Loading...</div>; // or a spinner
// }

// if (!user) {
//   return <Navigate to="/login" replace />;
//  }

// console.log("AuthProvider user (after loading):", user);


    const authInfo = {
        user,
        loading,
        registerUser,
        signInUser,
        signInGoogle,
        logOut,
        updateUserProfile,
        resetPassword,


    }
    console.log(authInfo.user?.email);
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;