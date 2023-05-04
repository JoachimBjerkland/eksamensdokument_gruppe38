import React from 'react';
import { store, mygames } from '../games';

function GameDetails({ match }) {
  const game = store.find(game => game.slug === match.params.slug) || mygames.find(game => game.slug === match.params.slug);

  return (
    <div>
      <h1 id="game-heading">{game.title}</h1>
      <div id="game-details">
        <img src={game.img} alt={game.title} />
        <p><strong>Release Date:</strong> {game.released}</p>
        <p><strong>Genres:</strong> {game.genres.join(', ')}</p>
        <p><strong>Description:</strong> {game.description}</p>
        <a href={game.link} target="_blank" rel="noopener noreferrer">
          <button id="buy-button" className="buy-button">Buy</button>
        </a>
      </div>
    </div>
  );
}

export default GameDetails;
