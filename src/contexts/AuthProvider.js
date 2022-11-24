import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const emailAndPasswordSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const emailAndPasswordLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const popUpSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const updateUserProfile = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    emailAndPasswordSignUp,
    emailAndPasswordLogIn,
    logOut,
    user,
    setUser,
    updateUserProfile,
    popUpSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
