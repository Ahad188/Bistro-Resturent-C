import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import axios from "axios";
// import axios, { Axios } from "axios";
 

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(true)
     const googleprovider = new GoogleAuthProvider();

     const createUser = (email, password) => {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password)
      }
  
      const signIn = (email, password) => {
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password);
      }

      const googleSingIn = ()=>{
          setLoading(true)
          return signInWithPopup(auth,googleprovider)
      }

      const logOut = () => {
          setLoading(true);
          return signOut(auth);
      }
      const updateUserProfile = (name, photo) => {
          return updateProfile(auth.currentUser, {
              displayName: name, photoURL: photo
          });
      }

     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, currentUser => {
              setUser(currentUser);
          //     console.log('current user', currentUser);
          // get and set token
          if(currentUser){
               axios.post('http://localhost:5000/jwt',{email: currentUser.email})
               .then(data=>{
                    // console.log(data.data.token);
                    localStorage.setItem('Token', data.data.token)
                    setLoading(false);
               })
          }else{
               localStorage.removeItem('Token')
          }


             
          });
          return () => {
              return unsubscribe();
          }
      }, [])


     const authInfo ={
          user,
          loading,
          createUser,
          signIn,
          googleSingIn,
          logOut,
          updateUserProfile
     }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;