import React,{useState} from 'react'
import "./Login.css"
import image from "./linkedin.png"
import { Link , useNavigate} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
import { db } from './firebase'; // Make sure to have Firebase configuration in './firebase' file.
import { collection, addDoc, getDocs, orderBy ,doc, getDoc } from "firebase/firestore";


function Login() {
  const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [pass,setpass] = useState("");
const [profile,setparofile] = useState(""); 
const sendPost = async (id) => {

  try {
    // Add a new post to the "posts" collection
    const docRef = await addDoc(collection(db, "users"), {
      name: name,
      email: email,
      photoUrl: profile,
      timestamp: Date.now(),
      uid: id,
    });

    console.log("Document written with ID: ", docRef.id);

    localStorage.setItem("linked_in_user",id)
    navigate("/")
    
  } catch (e) {
    console.error("Error adding document: ", e);
    // Handle the error here, e.g., show an error message to the user
  }

};
const formHandler =(e)=>{
e.preventDefault();

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    alert("user logged")
    // Signed up 
    const user = userCredential.user;

   sendPost(user.uid);


    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });



}

return (  
    <div className='login'>
      
<div className="logo">
<h1>Linked</h1>
<img src={image} alt="" />
</div>

<form onSubmit={formHandler} className='login__form'>

<input value={name} onChange={e=> setName(e.target.value)} placeholder='Enter Name' type="text" required/>
<input value={email} onChange={e=> setEmail(e.target.value)} placeholder='Enter Email' type="email" required/>
<input value={profile} onChange={e=> setparofile(e.target.value)} type="text" placeholder='Enter Profile Image(URL)' required />


<input value={pass} onChange={e=> setpass(e.target.value)} placeholder='Enter Password' type="password" required/>
<button type="submit">Register</button>



</form>

<div className="register">
<p>Already a member?</p>
<Link className="login__register" to="/login">Login</Link>

</div>
    </div>



  )
}

export default Login
