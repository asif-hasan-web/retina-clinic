
import { 
  getAuth,
   signInWithPopup,
   GoogleAuthProvider,
   onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword ,
    createUserWithEmailAndPassword,
    updateProfile 
   } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication()

//providers-google
const googleProvider=new GoogleAuthProvider()

const auth = getAuth();
const UseFirebase = () => {

    const [user,setUser]= useState({});
    const [error,setError]= useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(true);


//google sign in 
    function signInWithGoogle(){
       return signInWithPopup(auth, googleProvider)
        
    }
//get the currently signned in user 
useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
        if (signedInUser) {
         setUser(signedInUser);
        } else{
          setUser({})
        }
        setLoading(false)
      });
      return () => unsubscribe;
},[])

//sign out
function logOut() {
    signOut(auth)
      .then((result) => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  }
//email sign in
function signInWithEmail (e) {
    e.preventDefault();
   return signInWithEmailAndPassword  (auth,email, password)
     
  }

//email sign up
function signUP (e) {
    e.preventDefault();
    createUserWithEmailAndPassword  (auth,email, password)
      .then((result) => {
        setNameAndImage();
        alert("user has been created");
      })
      .catch((error) => {
        setError(error.message);
      });
  }
  //update img
  function setNameAndImage() {
    updateProfile(auth.currentUser, {
      displayName: name,
       photoURL: photo
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  }
  // get name
  function getName(e) {
    setName(e?.target?.value);
  }
  // Get photoUrl
  function getPhoto(e) {
    setPhoto(e?.target?.value);
  }
  // get Email
  function getEmail(e) {
    setEmail(e?.target?.value);
  }
  // Get password
  function getPassword(e) {
    setPassword(e?.target?.value);
  }
    return{
      signInWithGoogle,
       user,
       setUser,
       setError,
        error,
        logOut,
        signInWithEmail,
        getEmail,
        getPassword,
        signUP,
        getName,
        loading,
        getPhoto}
}

export default UseFirebase
