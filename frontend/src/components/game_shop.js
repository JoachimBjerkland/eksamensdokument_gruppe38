import React from 'react';
import { store } from '../games';

function GameShop() {
  return (
    <div>
      <h1 id="gameshop-heading">GAMESHOP</h1>
      <ul>
        {store.map((game) => (
          <li key={game.id}>
            <h2>{game.title}</h2>
            <img src={game.img} alt={game.title} />
            <p><strong>Release Date:</strong> {game.released}</p>
            <p><strong>Genres:</strong> {game.genres.join(', ')}</p>
            <a href={game.link} target="_blank" rel="noopener noreferrer">
              <button className="buy-button">Buy</button>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameShop;
