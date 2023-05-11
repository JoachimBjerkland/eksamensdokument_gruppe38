import { useState, useEffect } from 'react';

function GamePage() {
  const [game, setGame] = useState(null);
  const gameId = 3498;

  useEffect(() => {
    const fetchGame = async () => {
      const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=84ac59c1218a4dc4a60287a81d0a0fbd`);
      const data = await response.json();
      setGame(data);
    };
    fetchGame();
  }, [gameId]);

  return (
    <div className="game-card">
      {game && (
        <>
          <h2>{game.name}</h2>
          <img src={game.background_image} alt={game.name} />
          <p><strong>Id:</strong> {game.id}</p>
          <p><strong>Release Date:</strong> {game.released}</p>
          <p><strong>Genres:</strong> {game.genres.map(genre => genre.name).join(', ')}</p>
          <p><strong>Game Link:</strong> <a href={game.website} target="_blank" rel="noopener noreferrer">{game.website}</a></p>
          <p><strong>Game Image:</strong> {game.background_image}</p>
          <a href={game.website} target="_blank" rel="noopener noreferrer">
            <button className="buy-button">Buy Now</button>
          </a>
          <footer>
            <p>Powered by <a href="https://rawg.io/">RAWG API</a></p>
          </footer>
        </>
      )}
    </div>
  );
}

export default GamePage;





//Kilder: https://stackoverflow.com/questions/38486660/how-to-add-a-classname-id-to-react-bootstrap-component
//Kilde: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
//Kilde: https://legacy.reactjs.org/docs/lists-and-keys.html
//Kilde: https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples