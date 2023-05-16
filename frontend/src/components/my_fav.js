import React, { useEffect, useState } from 'react';
import GamePage from './GamePage';

function FavGames() {
  const [favoriteGames, setFavoriteGames] = useState([]);
  const [selectedGameId, setSelectedGameId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        'https://api.rawg.io/api/games?key=84ac59c1218a4dc4a60287a81d0a0fbd&dates=2019-09-01,2019-09-30&platforms=18,1,7';
      const response = await fetch(url);
      const data = await response.json();
      setFavoriteGames(data.results.slice(0, 20));
    };
    fetchData();
  }, []);

  const handleGameClick = (gameId) => {
    setSelectedGameId(gameId);
  };

  const handleRemoveGame = (gameId) => {
    const updatedGames = favoriteGames.filter((game) => game.id !== gameId);
    setFavoriteGames(updatedGames);
  };
  

  return (
    <div>
      <h1 id="fav-heading">MY FAVORITE GAMES</h1>
       {selectedGameId && (
        <div className="game-page-modal">
          <GamePage gameId={selectedGameId} />
        </div>
      )}
      <ul id="fav-games-list">
        {favoriteGames.map((game) => (
          <li key={game.id}>
            <h2>{game.name}</h2>
            <img src={game.background_image} alt={game.name} />
            <p>
              <strong>Release Date:</strong> {game.released}
            </p>
            <p>
              <strong>Genres:</strong> {game.genres.map((genre) => genre.name).join(', ')}
            </p>
            <button id={`game-details-${game.id}`} className="game-details" onClick={() => handleGameClick(game.id)}>View Details</button>
            <button id={`remove-favorites-${game.id}`} className="remove-favorites" onClick={() => handleRemoveGame(game.id)}>Fjern fra favoritt</button>
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
//Kilde: https://www.w3schools.com/html/html_id.asp
//Kilde: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
//Kilde: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
//Kilde: https://byby.dev/js-slugify-string (For slug)
//Kilde: https://dmitripavlutin.com/fetch-with-json/ (Fetch)
//Kilde: https://legacy.reactjs.org/docs/hooks-effect.html (useEffect)