import React, { useState, useEffect } from 'react';

function GamePage(props) {
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.rawg.io/api/games/${props.gameId}?key=84ac59c1218a4dc4a60287a81d0a0fbd`;
      const response = await fetch(url);
      const data = await response.json();
      setGame(data);
    };
    fetchData();
  }, [props.gameId]);

  const handleClose = () => {
    setGame(null);
  }

  if (!game) {
    return null;
  }

  return (
    <div id={`game-${game?.id}`} className="game-card">
      <button onClick={handleClose}>X</button>
      <h2>{game?.name}</h2>
      <img id={`game-image-${game?.id}`} src={game?.background_image} alt={game?.name} />
      <p><strong>Id:</strong> {game?.id}</p>
      <p><strong>Release Date:</strong> {game?.released}</p>
      <p><strong>Genres:</strong> {game?.genres?.map(genre => genre.name).join(', ')}</p>
      <p><strong>Game Link:</strong> <a href={`https://rawg.io/games/${game?.slug}`} target="_blank" rel="noopener noreferrer">{game?.name} on RAWG.io</a></p>
      <p><strong>Game Image:</strong> {game?.background_image}</p>
    </div>
  );
}

export default GamePage;



//Kilder: https://stackoverflow.com/questions/38486660/how-to-add-a-classname-id-to-react-bootstrap-component
//Kilde: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
//Kilde: https://legacy.reactjs.org/docs/lists-and-keys.html
//Kilde: https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples