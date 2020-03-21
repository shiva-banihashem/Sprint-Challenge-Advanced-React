import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx'
import PlayersList from './components/PlayersList.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PlayersList />
    </div>
  );
}

export default App;