import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent the form from actually submitting
    console.log('Login attempted with:', email, password);
  };

  const handleSignup = () => {
    console.log('Redirect to Signup');
    // Implement redirect logic here or other behavior
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
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
          <p className="signup-link" onClick={handleSignup}>New user? Register Here</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
