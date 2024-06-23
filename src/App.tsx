import { Router } from 'express';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Create from './Components/Create';
import Details from './Components/Details';
import Card from './Components/Card';
import NotFound from './Components/NotFound';

function App() {
  return (
      <Routes>
        <Route path= "/create" element={<Create />} />
        <Route path= "/hotels/:id" element={<Details/>} />
        <Route path= "/*" element={<NotFound />} />
        <Route path= "/" element={<Card />} />
      </Routes>
  );
}

export default App;
