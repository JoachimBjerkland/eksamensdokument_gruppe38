import React, { useState } from 'react';
import './App.scss';
import logo from './logos/SVG/macslogo_white.svg';
import Home from './components/home';
import MyFavorites from './components/my_fav';
import GameShop from './components/game_shop';
import MyGames from './components/my_games';
import GameCard from './components/GameCard';
import GamePage from './components/GamePage';

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

  const navigateToGameCard = (game) => {
    setCurrentPage({ name: 'GameCard', props: { game: game } });
  };  

  const navigateToGamePage = (game) => {
    setCurrentPage({ name: 'GamePage', props: { game: game } });
  };

  let content;
  if (currentPage === 'MyFavorites') {
    content = <MyFavorites />;
  } else if (currentPage === 'GameShop') {
    content = <GameShop />;
  } else if (currentPage === 'MyGames') {
    content = <MyGames navigateToGamePage={navigateToGamePage} navigateToGameCard={navigateToGameCard} />;
  } else if (currentPage.name === 'GameCard') {
    content = <GameCard game={currentPage.props.game} />;
  } else if (currentPage.name === 'GamePage') {
    content = <GamePage game={currentPage.props.game} />;
  } else {
    content = <Home navigateToGameCard={navigateToGameCard} />;
  }

  const showVisitShopButton = currentPage === 'Home';
  const showVisitFavGamesButten = currentPage === 'Home';
  const showVisitGameLibraryButton = currentPage === 'Home';

  return (
    <div>
      <nav className="header-nav">
        <img src={logo} alt="My logo" onClick={navigateToHome} />
        <button onClick={navigateToHome}>Home</button>
        <button onClick={navigateToMyGames}>My Games</button>
        <button onClick={navigateToMyFavorites}>My Favorites</button>
        <button onClick={navigateToGameShop}>Game Shop</button>
        <button onClick={() => navigateToGameCard({title: "Example Game", img: "https://example.com/game.png", id: 1, released: "2021-01-01", genres: ["Action", "Adventure"], link: "https://example.com", fav: false})}>Game Card</button>
        <button onClick={navigateToGamePage}>Game Page</button>
      </nav>
      {showVisitShopButton && <button id="visit-shop" className="visit-shop" onClick={navigateToGameShop}>Visit shop</button>}
      {content}
      {showVisitFavGamesButten && <button id="visit-favorite-games" className="visit-favorite-games" onClick={navigateToMyFavorites}>Visit favorite games</button>}
      {showVisitGameLibraryButton && <button id="visit-game-library" className="visit-game-library" onClick={navigateToMyGames}>Visit games library</button>}
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