import React, { useEffect, useState } from 'react';

function GameDetails({ match }) {
  const [game, setGame] = useState(null);

  useEffect(() => {
    const slug = match.params.slug;
    const url = `https://api.rawg.io/api/games/${slug}?key=84ac59c1218a4dc4a60287a81d0a0fbd`;

  fetch(url)
    .then(response => response.json())
    .then(data => setGame(data))
    .catch(error => console.log(error));
  }, [match.params.slug]);

  return (
    <div className="game-card">
      <img src={props.game.background_image} alt={props.game.name} />
      <h2>{props.game.name}</h2>
      <button
        id={`details-button-${props.game.id}`}
        className="details-button"
        onClick={() => props.navigateToGamePage(props.game.id)}>View Details</button>
    </div>
  );
}

export default GameDetails;

//Kilde: https://legacy.reactjs.org/docs/components-and-props.html
//Kilde: https://byby.dev/js-slugify-string (For slug)
//Kilde: https://dmitripavlutin.com/fetch-with-json/ (Fetch)
//Kilde: https://legacy.reactjs.org/docs/hooks-effect.html (useEffect)