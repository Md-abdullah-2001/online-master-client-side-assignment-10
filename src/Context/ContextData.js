import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app);
export const ContextProvider = createContext();

const ContextData = ({ children }) => {
  // const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // sign the user with email-pss

  const loginGoogle = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign in with pop-up
  const googleProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // log out user
  const logUserOut = () => {
    // setLoading(true);
    return signOut(auth);
  };
  // track user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("this is", currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = { user, googleProvider, logUserOut };
  return (
    <ContextProvider.Provider value={userInfo}>
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextData;
