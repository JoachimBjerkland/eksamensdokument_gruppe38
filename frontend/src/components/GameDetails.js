import React, { useEffect, useState } from 'react';

function GameDetails({ match }) {
  const [game, setGame] = useState(null);

  useEffect(() => {
    const slug = match.params.slug;
    const url = `https://api.rawg.io/api/games/${slug}?key=YOUR_API_KEY`;

    fetch(url)
      .then(response => response.json())
      .then(data => setGame(data))
      .catch(error => console.log(error));
  }, [match.params.slug]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 id="game-heading">{game.name}</h1>
      <div id="game-details">
        <img src={game.background_image} alt={game.name} />
        <p><strong>Release Date:</strong> {game.released}</p>
        <p><strong>Genres:</strong> {game.genres.map(genre => genre.name).join(', ')}</p>
        <p><strong>Description:</strong> {game.description_raw}</p>
        <a href={game.website} target="_blank" rel="noopener noreferrer">
          <button id="buy-button" className="buy-button">Buy</button>
        </a>
        <footer>
          <p>
            Powered by <a href="https://rawg.io/">RAWG API</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default GameDetails;

