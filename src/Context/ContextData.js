import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app);
export const ContextProvider = createContext();

const ContextData = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // create a new user
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign the user with email-pss
  const loginWithPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign in with pop-up
  const googleProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };
  // sign in with github pop-up
  const githubProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // log out user
  const logUserOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update user
  const updateProfileData = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  // track user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("this is", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    updateProfileData,
    loading,
    createNewUser,
    user,
    googleProvider,
    logUserOut,
    loginWithPassword,
    githubProvider,
  };
  return (
    <ContextProvider.Provider value={userInfo}>
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextData;
