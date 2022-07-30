import { createContext, useEffect, useState } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db, auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();

  const addUserToFirebase = async (user) => {
    await setDoc(doc(db, "users", user.email), {
      email: user.email,
      name: user.displayName,
      imageUrl: user.photoURL,
      followerCount: 0,
      bookmark: [],
      profileImg: "https://picsum.photos/400/200",
    });
  };

  const handleUserAuth = async () => {
    const userData = await signInWithPopup(auth, provider);
    const user = userData.user;
    console.log(user, "⚽");
    setCurrentUser(user);
    addUserToFirebase(user);
    router.push("/app");
  };

  return (
    <AuthContext.Provider value={{ handleUserAuth, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
