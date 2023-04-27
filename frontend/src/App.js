import React, { useState } from 'react';
import './App.css';
import './_examvariables.scss';
import { mygames } from './games';
import Home from './components/home';
import MyFavorites from './components/my_fav';
import GameShop from './components/game_shop';
import MyGames from './components/my_games';

function App() {
  return (
    <div>
      <nav className="header-nav">
        <img src="./logos/SVG/macslogo_black.svg" alt="My logo" />
        <button onClick={navigateToHome}>Home</button>
        <button onClick={navigateToMyGames}>My Games</button>
        <button onClick={navigateToMyFavorites}>My Favorites</button>
        <button onClick={navigateToGameShop}>Game Shop</button>
      </nav>
      <header>
        <h1>My Favorites</h1>
      </header>
      {content}
      <ul>
        {mygames.map((game) => (
          <li key={game.id}>
            {game.title} ({game.platform})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
