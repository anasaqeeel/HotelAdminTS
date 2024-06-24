import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';  // Ensure correct path
import { FirebaseError } from 'firebase/app';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signup successful with:", userCredential.user);
      alert('Signup successful!');
      navigate('/');  // Optionally navigate to login or other page
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error("Signup failed:", error.message);
        alert('Signup failed: ' + error.message);
      } else {
        console.error("Unknown error during signup", error);
        alert('Signup failed: An unknown error occurred');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Signup</h1>
        <form onSubmit={(e) => { e.preventDefault(); handleSignup(); }}>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
          </div>
          <div className="button-group">
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
