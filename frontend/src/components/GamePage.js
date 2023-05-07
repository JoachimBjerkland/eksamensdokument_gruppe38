import { useState } from 'react';
import { mygames } from '../games';

function GamePage() {
  const [game] = useState(mygames[3]);

  return (
    <div id="gamepage" className="game-card">
      <h2>{game.title}</h2>
      <img src={game.img} alt={game.title} />
      <p><strong>Id:</strong> {game.id}</p>
      <p><strong>Release Date:</strong> {game.released}</p>
      <p><strong>Genres:</strong> {game.genres.join(', ')}</p>
      <p><strong>Game Link:</strong> {game.link}</p>
      <p><strong>Game Image:</strong> {game.img}</p>
      <p><strong>Favorite:</strong> {game.fav ? 'Yes' : 'No'}</p>
      <a href={game.link} target="_blank" rel="noopener noreferrer">
        <button id="buy-button" className="buy-button">Buy Now</button>
      </a>
    </div>
  );
}

export default GamePage;




//Kilder: https://stackoverflow.com/questions/38486660/how-to-add-a-classname-id-to-react-bootstrap-component
//Kilde: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
//Kilde: https://legacy.reactjs.org/docs/lists-and-keys.html
//Kilde: https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples