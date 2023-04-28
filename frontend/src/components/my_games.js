import React from 'react';
import { mygames } from '../games';

function MyGames() {
  return (
    <div>
      <h1 id="games-heading">MY GAMES</h1>
      <ul>
        {mygames.map((game) => (
          <li key={game.id}>
            <h2>{game.title}</h2>
            <img src={game.img} alt={game.title} />
            <p><strong>Release Date:</strong> {game.released}</p>
            <p><strong>Genres:</strong> {game.genres.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyGames;