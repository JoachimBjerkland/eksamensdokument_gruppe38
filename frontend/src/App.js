import React, { useState } from 'react';
import './App.css';
import logo from './logos/SVG/macslogo_white.svg';
import Home from './components/home';
import MyFavorites from './components/my_fav';
import GameShop from './components/game_shop';
import MyGames from './components/my_games';


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
    content = <GameShop />;
  } else if (currentPage === 'MyGames') {
    content = <MyGames />;
  } else {
    content = <Home />;
  }

  return (
    <div>
      <nav className="header-nav">
        <img src={logo} alt="My logo" />
        <button onClick={navigateToHome}>Home</button>
        <button onClick={navigateToMyGames}>My Games</button>
        <button onClick={navigateToMyFavorites}>My Favorites</button>
        <button onClick={navigateToGameShop}>Game Shop</button>
      </nav>
      {content}
    </div>
  );
}

export default App;
