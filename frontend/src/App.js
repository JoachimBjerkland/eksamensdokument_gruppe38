<<<<<<< Updated upstream
import './App.css';
=======
import React, { useState } from 'react';
import './App.css';
import './_examvariables.scss';
import { mygames } from './games';
import Home from './components/home';
import MyFavorites from './components/my_fav';
import GameShop from './components/game_shop';
import MyGames from './components/my_games';
>>>>>>> Stashed changes

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const navigateToHome = () => {
    setCurrentPage('Home');
  };

  const navigateToMyFavorites = () => {
    setCurrentPage('MyFavorites');
  };

  const navigateToGameShop = () => {
    setCurrentPage('GameShop');
  };

  const navigateToMyGames = () => {
    setCurrentPage('MyGames');
  };

  let content;
  if (currentPage === 'MyFavorites') {
    content = <MyFavorites />;
  } else if (currentPage === 'GameShop') {
    content = <GameShop games={mygames} />;
  } else if (currentPage === 'MyGames') {
    content = <MyGames />;
  } else {
    content = <Home />;
  }

  return (
<<<<<<< Updated upstream
<h2>Overskrift</h2>
=======
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
    </div>
>>>>>>> Stashed changes
  );
}

export default App;
