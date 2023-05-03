import React from 'react';
import { store, mygames } from '../games';

function Home() {
  const firstThreeGames = store.slice(0, 3);

  const favoriteGames = mygames.filter(game => {
    return game.title === "Grand Theft Auto V" || game.title === "Destiny 2";
  });

  return (
    <div>
      <h1 id="home-heading">GAMESHOP</h1>
      <button id="visit-shop" className="visit-shop">Visit shop</button>
      <ul className="game-list">
        {firstThreeGames.map((game) => (
          <div id="game-card" className="game-card" key={game.id}>
            <li className="game-info">
              <h3>{game.title}</h3>
              <img src={game.img} alt={game.title} />
              <p><strong>Release Date:</strong> {game.released}</p>
              <p><strong>Genres:</strong> {game.genres.join(', ')}</p>
              <a href={game.link} target="_blank" rel="noopener noreferrer">
                <button id="buy-button" className="buy-button">Buy</button>
              </a>
            </li>
          </div>
        ))}
      </ul>
      
      <div id="favorite-games">
        <h2 id="home-heading">MY FAVORITES</h2>
        <ul>
          {favoriteGames.map((game) => (
            <li key={game.id}>
              <h3>{game.title}</h3>
              <img src={game.img} alt={game.title} />
              <p><strong>Release Date:</strong> {game.released}</p>
              <p><strong>Genres:</strong> {game.genres.join(', ')}</p>
            </li>
          ))}
        </ul>
        <button id="visit-fav" className="visit-fav">Go to favorites</button>
      </div>

      <div>
        <h2 id="home-heading">MY GAME-LIBRARY - {mygames.length} games</h2>
        <ul>
          {mygames.slice(0, 4).map((game) => (
            <li key={game.id}>
              <h3>{game.title}</h3>
              <img src={game.img} alt={game.title} />
              <p><strong>Release Date:</strong> {game.released}</p>
              <p><strong>Genres:</strong> {game.genres.join(', ')}</p>
            </li>
          ))}
        </ul>
        <button id="visit-games" className="visit-games">Go to library</button>
      </div>
    </div>
  );
}

export default Home;

//Kilder: https://stackoverflow.com/questions/38486660/how-to-add-a-classname-id-to-react-bootstrap-component
//Kilde: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
//Kilde: https://legacy.reactjs.org/docs/lists-and-keys.html
//Kilde: https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
//Kilde: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice