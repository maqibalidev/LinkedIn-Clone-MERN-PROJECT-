import {useState} from 'react'
import "./Login.css"
import image from "./linkedin.png"
import { useDispatch } from 'react-redux';
import { Outlet, Link,useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";

import { db } from './firebase';
import { addUser } from './userSlice';

function Login() {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [email,setEmail] = useState("");
const [pass,setpass] = useState("");


const sendPost = async (id) => {
  
  const q = query(collection(db, "users"), where("uid", "==", id));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {

  localStorage.setItem("linked_in_user",id);
  dispatch(addUser({name:doc.data.name,email:doc.data.email,photoUrl:doc.data.photoUrl,uid:doc.data.uid}))

navigate("/")
});

};


const formHandler = (e) => {
  e.preventDefault();

  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("User found");
      console.log(user);
      sendPost(user.uid);
    })
    .catch((error) => {
      // Handle authentication errors
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
};




  return (
    <div className='login'>
      
<div className="logo">
<h1>Linked</h1>
<img src={image} alt="" />
</div>

<form onSubmit={formHandler} className='login__form'>


<input value={email} onChange={e=> setEmail(e.target.value)} placeholder='Enter Email' type="email" required/>



<input value={pass} onChange={e=> setpass(e.target.value)} placeholder='Enter Password' type="password" required/>
<button type="submit">Sign in</button>



</form>

<div className="register">
<p>Not a member?</p>
<Link className="login__register" to="/register">Register</Link>
</div>
    </div>



  )
}

export default Login
