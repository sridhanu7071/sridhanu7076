import React from 'react';
import Navbar from './Nav';
import Weather from './Weather';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Weather />
    </div>
  );
};

export default App;