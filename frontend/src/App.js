import React from 'react';
import './App.css';
import './_examvariables.scss'
import { store, mygames } from './games';

function App() {
  return (
    <div>
      <img src="./macslogo_black.svg" alt="My logo" />
      <h1>My Game Collection</h1>
      <ul>
        {mygames.map((game) => (
          <li key={game.id}>
            {game.title} ({game.platform})
          </li>
        ))}
      </ul>
      <p>Number of games in collection: {store.length}</p>
    </div>
  );
}

export default App;
