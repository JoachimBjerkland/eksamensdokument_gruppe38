import React, { useState, useEffect } from 'react';

function GameShop() {
  const [shopGames, setShopGames] = useState([]);

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=84ac59c1218a4dc4a60287a81d0a0fbd&dates=2023-01-01,2023-05-08&ordering=-released&page_size=10&genres=4')
      .then(res => res.json())
      .then(data => setShopGames(data.results))
  }, []);

  return (
    <div>
      <h1>GAMESHOP</h1>
      <ul>
        {shopGames.map((game) => (
          <li key={game.id}>
            <img src={game.background_image} alt={game.name} />
            <div>
              <h3>{game.name}</h3>
              <p className="release-date"><strong>Release Date:</strong> {game.released}</p>
              <p className="genres"><strong>Genres:</strong> {game.genres.map(genre => genre.name).join(', ')}</p>
              <a href={`https://rawg.io/games/${game.slug}`} target="_blank" rel="noopener noreferrer">
                <button id={`buy-buttons-${game.id}`} className="buy-buttons">Buy</button>
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
//Kilde https://stackoverflow.com/questions/73928041/link-href-product-slug-current-slug-current-is-not-working-slug-curre (Viser enkelte måter man kan navigere til en side på)
//Kilde: https://www.w3schools.com/html/html_id.asp
//Kilde: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
//Kilde: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
//Kilde: https://byby.dev/js-slugify-string (For slug)
//Kilde: https://dmitripavlutin.com/fetch-with-json/ (Fetch)
//Kilde: https://legacy.reactjs.org/docs/hooks-effect.html (useEffect)