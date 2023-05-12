import React, { useState, useEffect } from 'react';

function Home() {
  const [recentGames, setRecentGames] = useState([]);
  const [myGames, setMyGames] = useState([]);
  const [favoriteGames, setFavoriteGames] = useState([]);

  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=84ac59c1218a4dc4a60287a81d0a0fbd&dates=2023-01-01,2023-05-08&ordering=-released&page_size=3')
      .then(res => res.json())
      .then(data => {
        setRecentGames(data.results);
      })

    fetch('https://api.rawg.io/api/games?key=84ac59c1218a4dc4a60287a81d0a0fbd&page_size=4&genres=4')
      .then(res => res.json())
      .then(data => {
        setMyGames(data.results);
      })

    fetch('https://api.rawg.io/api/games?key=84ac59c1218a4dc4a60287a81d0a0fbd&dates=2019-01-01,2023-05-08&ordering=-rating&page_size=2')
      .then(res => res.json())
      .then(data => {
        setFavoriteGames(data.results);
      })
  }, []);

  return (
    <div>
      <h1 id="home-heading">GAMESHOP</h1>
      <button id="visit-shop" className="visit-shop">Visit shop</button>
      <ul className="game-list">
        {recentGames.map(game => (
          <li id={`game-card-${game.id}`} className="game-card" key={game.id}>
            <a href="/gamecard">
              <h3>{game.name}</h3>
              <img src={game.background_image} alt={game.name} />
              <p><strong>Release Date:</strong> {game.released}</p>
              <p><strong>Genres:</strong> {game.genres.map(genre => genre.name).join(', ')}</p>
              <button id={`buy-button-${game.id}`} className="buy-button">Buy</button>
            </a>
          </li>
        ))}
      </ul>

      <div id="favorite-games">
        <h2 id="favorite-heading">MY FAVORITES</h2>
        <ul className="game-list">
          {favoriteGames.map(game => (
            <li id={`favorite-card-${game.id}`} className="game-card" key={game.id}>
              <a href="/gamecard">
                <h3>{game.name}</h3>
                <img src={game.background_image} alt={game.name} />
                <p><strong>Release Date:</strong> {game.released}</p>
                <p><strong>Genres:</strong> {game.genres.map(genre => genre.name).join(', ')}</p>
                <button id={`buy-button-${game.id}`} className="buy-button">Buy</button>
              </a>
            </li>
          ))}
          <button id="visit-favorite-games" className="visit-favorite-games">Visit favorite games</button>
        </ul>
      </div>

      <div>
        <h2 id="game-library-heading">MY GAME-LIBRARY - {myGames.length} games</h2>
        <ul className="game-list">
          {myGames.map(game => (
            <li id={`game-card-${game.id}`} className="game-card" key={game.id}>
              <a href="/gamecard">
                <h3>{game.name}</h3>
                <img src={game.background_image} alt={game.name} />
                <p><strong>Release Date:</strong> {game.released}</p>
                <p><strong>Genres:</strong> {game.genres.map(genre => genre.name).join(', ')}</p>
                <button id={`buy-button-${game.id}`} className="buy-button">Buy</button>
              </a>
            </li>
          ))}
          <button id="visit-game-library" className="visit-game-library">Visit games library</button>
        </ul>
        <footer>
          <p>
            Powered by <a href="https://rawg.io/">RAWG API</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Home;


//Kilder: https://stackoverflow.com/questions/38486660/how-to-add-a-classname-id-to-react-bootstrap-component
//Kilde: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
//Kilde: https://legacy.reactjs.org/docs/lists-and-keys.html
//Kilde: https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
//Kilde: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice