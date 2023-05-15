import { useState, useEffect } from 'react';

function GameCard() {
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.rawg.io/api/games?key=84ac59c1218a4dc4a60287a81d0a0fbd&dates=2019-09-01,2019-09-30&platforms=18,1,7');
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setGame(data.results[randomIndex]);
    };
    fetchData();
  }, []);

  return (
    <div id={`game-${game?.id}`} className="game-card">
      <h2>{game?.name}</h2>
      <img src={game?.background_image} alt={game?.name} />
      <p><strong>Release Date:</strong> {game?.released}</p>
      <p><strong>Genres:</strong> {game?.genres?.map(genre => genre.name).join(', ')}</p>
      <a href={game?.website} target="_blank" rel="noopener noreferrer">
      </a>
    </div>
  );
}

export default GameCard;


//Kilder: https://stackoverflow.com/questions/38486660/how-to-add-a-classname-id-to-react-bootstrap-component
//Kilde: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
//Kilde: https://legacy.reactjs.org/docs/lists-and-keys.html
//Kilde: https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples