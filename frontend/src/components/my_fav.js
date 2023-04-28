import React from 'react';
import { mygames } from "../games";

const favGameIds = [7, 8, 6, 9, 13];

function FavGames () {
  const favGames = mygames.filter((game) => favGameIds.includes(game.id));
  return (
    <div>
      <h1 id="favgames-heading">MY FAVORITE GAMES</h1>
      <ul>
        {favGames.map((game) => (
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

export default FavGames;
