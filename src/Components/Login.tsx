import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent the form from submitting traditionally
    console.log('Login attempted with:', username, password);
  };

  const handleSignup = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent form from submitting
    console.log('Signup clicked');
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit" onClick={handleLogin}>Login</button>
          <button type="button" onClick={handleSignup}>Signup</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
