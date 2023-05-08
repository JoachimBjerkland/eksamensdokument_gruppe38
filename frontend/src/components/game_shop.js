import React, { useState, useEffect } from 'react';

function GameShop() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=84ac59c1218a4dc4a60287a81d0a0fbd&dates=2019-09-01,2019-09-30&platforms=18,1,7')
      .then(res => res.json())
      .then(data => setGames(data.results.slice(0, 5)))
      .catch(err => console.error(err));
  }, []);

  return (
    <div id="gameshop">
      <h1 id="gameshop-heading">GAMESHOP</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <img src={game.background_image} alt={game.name} />
            <div>
              <h2>{game.name}</h2>
              <p className="release-date"><strong>Release Date:</strong> {game.released}</p>
              <p className="genres"><strong>Genres:</strong> {game.genres.map(genre => genre.name).join(', ')}</p>
              <a href={game.website} target="_blank" rel="noopener noreferrer">
                <button className="buy-button">Buy</button>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameShop;




//Kilder: https://stackoverflow.com/questions/38486660/how-to-add-a-classname-id-to-react-bootstrap-component
//Kilde: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
//Kilde: https://legacy.reactjs.org/docs/lists-and-keys.html
//Kilde: https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
