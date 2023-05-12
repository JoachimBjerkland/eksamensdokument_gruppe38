import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function FavGames() {
  const [favoriteGames, setFavoriteGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://api.rawg.io/api/games?key=84ac59c1218a4dc4a60287a81d0a0fbd&dates=2019-09-01,2019-09-30&platforms=18,1,7';
      const response = await fetch(url);
      const data = await response.json();
      setFavoriteGames(data.results.slice(0, 20));
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 id="fav-heading">MY FAVORITE GAMES</h1>
      <ul id="fav-games-list">
        {favoriteGames.map((game, index) => (
          <li key={game.id}>
            {index === 0 ? (
              <Link to={`/GamePage.js/${game.slug}`}>
                <h2>{game.name}</h2>
                <img src={game.background_image} alt={game.name} />
                <p><strong>Release Date:</strong> {game.released}</p>
                <p><strong>Genres:</strong> {game.genres.map(genre => genre.name).join(', ')}</p>
                <button className="view-details-button">View Details</button>
              </Link>
            ) : (
              <>
                <h2>{game.name}</h2>
                <img src={game.background_image} alt={game.name} />
                <p><strong>Release Date:</strong> {game.released}</p>
                <p><strong>Genres:</strong> {game.genres.map(genre => genre.name).join(', ')}</p>
                <button className="view-details-button">View Details</button>

              </>
            )}
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