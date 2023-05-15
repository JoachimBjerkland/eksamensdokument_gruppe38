import React, { useState } from 'react';
import './App.scss';
import logo from './logos/SVG/macslogo_white.svg';
import Home from './components/home';
import FavGames from './components/my_fav';
import GameShop from './components/game_shop';
import MyGames from './components/my_games';
import GameCard from './components/GameCard';
import GamePage from './components/GamePage';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [currentGame, setCurrentGame] = useState(null);
  const [setGameId] = useState(null);


  const navigateToHome = () => {
    setCurrentPage('Home');
  };

  const navigateToFavGames = () => {
    setCurrentPage('FavGames');
  };

  const navigateToGameShop = () => {
    setCurrentPage('GameShop');
  };

  const navigateToMyGames = () => {
    setCurrentPage('MyGames');
  };

  const navigateToGameCard = (game) => {
    setCurrentGame(game);
    setCurrentPage('GameCard');
  };  

  const navigateToGamePage = (gameId) => {
    setGameId(gameId);
    setCurrentPage('GamePage');
  };

  let content;
  if (currentPage === 'FavGames') {
    content = <FavGames />;
  } else if (currentPage === 'GameShop') {
    content = <GameShop />;
  } else if (currentPage === 'MyGames') {
    content = <MyGames navigateToGamePage={navigateToGamePage} navigateToGameCard={navigateToGameCard} />;
  } else if (currentPage === 'GameCard') {
    content = <GameCard game={currentGame} navigateToGamePage={navigateToGamePage} />;
  } else if (currentPage === 'GamePage') {
    content = <GamePage />;
  } else {
    content = <Home navigateToGameCard={navigateToGameCard} />;
  }
  
  const showVisitFavoriteGamesButton = currentPage === 'Home';
  const showVisitGameLibraryButton = currentPage === 'Home';
  const showVisitShopButton = currentPage === 'Home';
  const gameInfo = currentPage === 'Home';

  return (
    <div>
      <nav className="header-nav">
        <img src={logo} alt="My logo" onClick={navigateToHome} />
        <button onClick={navigateToHome}>Home</button>
        <button onClick={navigateToMyGames}>My Games</button>
        <button onClick={navigateToFavGames}>My Favorites</button>
        <button onClick={navigateToGameShop}>Game Shop</button>
        <button onClick={() => navigateToGameCard(gameInfo)}>Game Card</button>
        <button onClick={() => navigateToGamePage(gameInfo)}>Game Page</button>
      </nav>
      {showVisitShopButton && <button id="visit-shop" className="visit-shop" onClick={navigateToGameShop}>Visit shop</button>}
      {content}
      {showVisitGameLibraryButton && <button id="visit-game-library" className="visit-game-library" onClick={navigateToMyGames}>Visit games library</button>}
      {showVisitFavoriteGamesButton && <button id="visit-favorite-games" className="visit-favorite-games" onClick={navigateToFavGames}>Visit favorite games</button>}
      <footer>
        <p>
          Powered by <a href="https://rawg.io/">RAWG API</a>
        </p>      
      </footer>
    </div>
  );  
}

export default App;


//Kilder: https://stackoverflow.com/questions/38486660/how-to-add-a-classname-id-to-react-bootstrap-component
//Kilde: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
//Kilde: https://legacy.reactjs.org/docs/lists-and-keys.html
//Kilde: https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
//Kilde: https://www.tabnine.com/code/javascript/functions/react/setCurrentPage