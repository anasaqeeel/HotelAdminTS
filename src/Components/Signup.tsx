import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation


  const handleSignup = () => {
    console.log('Redirect to Signup');
    // Implement redirect logic here or other behavior
  };

  const handleLogin = () => {
    console.log('Redirect back to login');
    navigate('/'); // Navigate to the login route
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Signup</h1>
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>
          <div className="button-group">
            <button type="submit" onClick={handleLogin}>Login</button>
            <button type="button" onClick={handleSignup}>Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
