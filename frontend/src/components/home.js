import React from 'react';
import { store, mygames } from "../games"

function Home() {
  const firstThreeGames = store.slice(0, 3);

  const favoriteGames = mygames.filter(game => {
    return game.title === "Destiny 2" || game.title === "EA SPORTS™ FIFA 23";
});

  return (
    <div>
      <h1 id="home-heading">GAMESHOP</h1>
      <button className="visit-shop">Visit shop</button>
      <ul className="game-list">
        {firstThreeGames.map((game) => (
          <div className="game-card" key={game.id}>
             <li className="game-info">
              <h3>{game.title}</h3>
              <img src={game.img} alt={game.title} />
              <p><strong>Release Date:</strong> {game.released}</p>
              <p><strong>Genres:</strong> {game.genres.join(', ')}</p>
              <a href={game.link} target="_blank" rel="noopener noreferrer">
                <button className="buy-button">Buy</button>
              </a>
            </li>
          </div>
        ))}
      </ul>
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
      </div>
      <div>
        <h2 id="home-heading">MY FAVOURITES</h2>
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
      </div>
    </div>
  );
}

export default Home;