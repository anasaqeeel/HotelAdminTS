import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './firebase';  // Ensure correct path
import { FirebaseError } from 'firebase/app';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful with:", userCredential.user);
      alert('Login successful!');
      navigate('/dashboard'); 
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error("Login failed:", error.message);
        alert('Login failed: ' + error.message);
      } else {
        console.error("Unknown error during login", error);
        alert('Login failed: An unknown error occurred');
      }
    }
  };
  const loginWithGoogle =async()=>{
    try{
      const googleCred= await signInWithPopup(auth,googleProvider)
      console.log("Login successful with:", googleCred.user);
      alert('Login successful!');
      navigate('/dashboard'); 
    }
    catch( error ){
      if (error instanceof FirebaseError) {
        console.error("Login failed with google :", error.message);
        alert('Login failed with google : ' + error.message);
      } else {
        console.error("Unknown error during login with google ", error);
        alert('Login failed with google : An unknown error occurred');
      }
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
          </div>
          <div className="button-group">
            <button type="submit">Login</button>
            <button onClick={loginWithGoogle}> Sign In with Google </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
