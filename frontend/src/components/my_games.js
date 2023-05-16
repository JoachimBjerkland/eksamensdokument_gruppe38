import React, { useEffect, useState } from 'react';
import GamePage from './GamePage';

function MyGames() {
  const [games, setGames] = useState([]);
  const [isDetailsShown, setIsDetailsShown] = useState(false);
  const [gameId, setGameId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = '84ac59c1218a4dc4a60287a81d0a0fbd';
      const url = `https://api.rawg.io/api/games?key=${apiKey}&page_size=20&genres=4`;
      const response = await fetch(url);
      const data = await response.json();
      setGames(data.results);
    };
    fetchData();
  }, []);

  const handleClickDetails = (gameId, index) => {
    if (index === 0) {
      setIsDetailsShown(true);
      setGameId(gameId);
    }
  };

  const handleCloseDetails = () => {
    setIsDetailsShown(false);
    setGameId(null);
  };

  return (
    <div>
      <h1>MY GAMES</h1>
      {isDetailsShown && gameId && (
        <div className="games-details">
          <GamePage gameId={gameId} />
          <button onClick={handleCloseDetails} className="close-button">
            &#x2716;
          </button>
        </div>
      )}
      {games.length > 0 ? (
        <ul className="game-list">
          {games.map((game, index) => (
            <li id={`game-${game.id}`} key={game.id} className="game-card">
              <div className="game-info">
                <h2>{game.name}</h2>
                <img src={game.background_image} alt={game.name} />
                <p>
                  <strong>Release Date:</strong> {game.released}
                </p>
                <p>
                  <strong>Genres:</strong> {game.genres.map((genre) => genre.name).join(', ')}
                </p>
              </div>
              <button
                id={`view-button-${game.id}`}
                className="view-button"
                onClick={() => handleClickDetails(game.id, index)}
              >
                View Details
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default MyGames;


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