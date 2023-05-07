import React from 'react';
import { Link } from 'react-router-dom';
import { mygames } from '../games';

function MyGames() {
  const firstGame = mygames[0];

  return (
    <div>
      <h1 id="games-heading">MY GAMES</h1>
      <ul>
        <li key={firstGame.id}>
          <Link to={`/game/${firstGame.title.toLowerCase().replace(/\s+/g, '-')}`}>
            <h2>{firstGame.title}</h2>
            <img src={firstGame.img} alt={firstGame.title} />
            <p><strong>Release Date:</strong> {firstGame.released}</p>
            <p><strong>Genres:</strong> {firstGame.genres.join(', ')}</p>
            <button id="view-button" className="view-button">View details</button>
          </Link>
        </li>
        {mygames.slice(1).map((game) => (
          <li key={game.id}>
            <h2>{game.title}</h2>
            <img src={game.img} alt={game.title} />
            <p><strong>Release Date:</strong> {game.released}</p>
            <p><strong>Genres:</strong> {game.genres.join(', ')}</p>
            <button id="view-button" className="view-button">View details</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyGames;




//Kilder: https://stackoverflow.com/questions/38486660/how-to-add-a-classname-id-to-react-bootstrap-component
//Kilde: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
//Kilde: https://legacy.reactjs.org/docs/lists-and-keys.html
//Kilde: https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples