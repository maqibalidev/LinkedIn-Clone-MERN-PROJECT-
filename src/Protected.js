import React,{useState,useEffect} from 'react'
import Login from './Login'
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import App from './App'
import { auth, db } from './firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSelector } from 'react-redux';
function Protected() {

  const [checkLogin,setLogin] = useState(false);
  const [data,setdata] = useState({});
  const itemselector = useSelector((state) => state);
  console.log(itemselector);


 
  
    const sendPost = async () => {
      const id = localStorage.getItem("linked_in_user");
      const q = query(collection(db, "users"), where("uid", "==", id));

    
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data)
       setdata(doc.data)
      
      });
    };

    sendPost(); // Call the function once when the component is mounted
  
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      setLogin(true)
      // ...
    } else {
      // User is signed out
      // ...
      setLogin(false)
    }
  });




  return (
   <>
    { !checkLogin ?(<Login/>) :  <App data={data}/>}
  </>
  )

}

export default Protected
