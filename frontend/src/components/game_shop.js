import React, { useState, useEffect } from 'react';

function GameShop() {
  const [shopGames, setShopGames] = useState([]);

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=84ac59c1218a4dc4a60287a81d0a0fbd&dates=2019-09-01,2019-09-30&ordering=-released&page_size=10&genres=4')
      .then(res => res.json())
      .then(data => setShopGames(data.results))
  }, []);

  return (
    <div id="gameshop">
      <h1 id="gameshop-heading">GAMESHOP</h1>

      <h2>All games:</h2>
      <ul>
        {shopGames.map((game) => (
          <li key={game.id}>
            <img src={game.background_image} alt={game.name} />
            <div>
              <h3>{game.name}</h3>
              <p className="release-date"><strong>Release Date:</strong> {game.released}</p>
              <p className="genres"><strong>Genres:</strong> {game.genres.map(genre => genre.name).join(', ')}</p>
              <a href={`https://rawg.io/games/${game.slug}`} target="_blank" rel="noopener noreferrer">
                <button className="buy-button">Buy</button>
              </a>
            </div>
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

export default GameShop;


//Kilder: https://stackoverflow.com/questions/38486660/how-to-add-a-classname-id-to-react-bootstrap-component
//Kilde: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
//Kilde: https://legacy.reactjs.org/docs/lists-and-keys.html
//Kilde: https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
