import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';
import Login from './Components/Login';  // Import Login if needed at route level
import Signup from './Components/Signup'; // Ensure this is imported correctly
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />  
      <Route path="/Signup" element={<Signup />} />
      <Route path ="/Dashboard" element={<Dashboard/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
