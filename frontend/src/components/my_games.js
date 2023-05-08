import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MyGames() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = '84ac59c1218a4dc4a60287a81d0a0fbd';
      const url = `https://api.rawg.io/api/games?key=${apiKey}&dates=2019-09-01,2019-09-30&platforms=18,1,7&page_size=10`;
      const response = await fetch(url);
      const data = await response.json();
      setGames(data.results);
    };
    fetchData();
  }, []);

  if (games.length === 0) {
    return <div>Loading...</div>;
  }

  const firstGame = games[0];

  return (
    <div>
      <h1 id="games-heading">MY GAMES</h1>
      <ul className="game-list">
        <li id={`game-${firstGame.id}`} key={firstGame.id} className="game-card">
          <Link to={`/game/${firstGame.slug}`}>
            <h2>{firstGame.name}</h2>
            <img src={firstGame.background_image} alt={firstGame.name} />
            <p><strong>Release Date:</strong> {firstGame.released}</p>
            <p><strong>Genres:</strong> {firstGame.genres.map(genre => genre.name).join(', ')}</p>
            <button id="view-button" className="view-button">View details</button>
          </Link>
        </li>
        {games.slice(1).map((game) => (
          <li id={`game-${game.id}`} key={game.id} className="game-card">
            <Link to={`/game/${game.slug}`}>
              <h2>{game.name}</h2>
              <img src={game.background_image} alt={game.name} />
              <p><strong>Release Date:</strong> {game.released}</p>
              <p><strong>Genres:</strong> {game.genres.map(genre => genre.name).join(', ')}</p>
              <button id="view-button" className="view-button">View details</button>
            </Link>
          </li>
        ))}
      </ul>
      <footer>
          <p>
            Powered by <a href="https://rawg.io/">RAWG API</a>
          </p>
        </footer>
    </div>
  );
}

export default MyGames;




//Kilder: https://stackoverflow.com/questions/38486660/how-to-add-a-classname-id-to-react-bootstrap-component
//Kilde: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
//Kilde: https://legacy.reactjs.org/docs/lists-and-keys.html
//Kilde: https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples