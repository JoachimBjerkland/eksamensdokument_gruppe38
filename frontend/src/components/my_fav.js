import React from 'react';
import { mygames } from '../games';

const favGameIds = [6, 7, 8, 9, 19, 11, 12, 13, 14, 15];

function FavGames () {
  const favGames = mygames.filter((game) => favGameIds.includes(game.id));
  return (
    <div>
      <h1 id="fav-heading">MY FAVORITE GAMES</h1>
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

//Kilder: https://stackoverflow.com/questions/38486660/how-to-add-a-classname-id-to-react-bootstrap-component
//Kilde: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
//Kilde: https://legacy.reactjs.org/docs/lists-and-keys.html
//Kilde: https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples