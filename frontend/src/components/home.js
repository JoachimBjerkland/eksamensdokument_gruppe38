import React, { useState, useEffect } from 'react';
import GamePage from "./GamePage";


function Home() {
  const [gameId, navigateToGamePage] = useState(null);
  const [recentGames, setRecentGames] = useState([]);
  const [myGames, setMyGames] = useState([]);
  const [favoriteGames, setFavoriteGames] = useState([]);
  const [isDetailsShown, setIsDetailsShown] = useState(false);
  const [favorites, setFavorites] = useState([]);



  useEffect(() => {
    fetch('https://api.rawg.io/api/games?key=84ac59c1218a4dc4a60287a81d0a0fbd&dates=2023-01-01,2023-05-08&ordering=-released&page_size=3&genres=4')
      .then(res => res.json())
      .then(data => {
        setRecentGames(data.results);
      })

    fetch('https://api.rawg.io/api/games?key=84ac59c1218a4dc4a60287a81d0a0fbd&page_size=4&genres=4')
      .then(res => res.json())
      .then(data => {
        setMyGames(data.results);
      })

    fetch('https://api.rawg.io/api/games?key=84ac59c1218a4dc4a60287a81d0a0fbd&dates=2019-09-01,2019-09-30&platforms=18,1,7ordering=-rating&page_size=2')
      .then(res => res.json())
      .then(data => {
        setFavoriteGames(data.results);
      })
  }, []);
  
  const handleCloseDetails = () => {
    setIsDetailsShown(false);
  };

  const addToFavorites = (game) => {
    setFavoriteGames([...favoriteGames, game]);
    console.log(`Added ${game.name} to favorites`);
  };

  const removeFromFavorites = (gameId) => {
    setFavorites(favorites.filter((game) => game.id !== gameId));
  };

const isInFavorites = (gameId) => {
  return favorites.some((game) => game.id === gameId);
};

  return (
    <div>
      <h1 id="home-heading">GAMESHOP</h1>
      <ul className="game-list">
        {recentGames.map((game, index) => (
          <li id={`game-card-${game.id}`} className="game-card" key={game.id}>
            {index === 0 ? (
              <>
                <h3>{game.name}</h3>
                <img src={game.background_image} alt={game.name} />
                <p><strong>Release Date:</strong> {game.released}</p>
                <p><strong>Genres:</strong> {game.genres.map(genre => genre.name).join(', ')}</p>
                <div className="button-container">
                  <button
                    id={`buy-button-${game.id}`}
                    className="buy-button"
                    onClick={() => (window.location.href = `https://rawg.io/games/${game.slug}`)}
                  >
                    Buy
                  </button>
                  <button id={`details-button-${game.id}`} className="details-button" onClick={() => navigateToGamePage(960602)}>View Details</button>
                  <button id={`favorite-button-${game.id}`} className="favorite-button" onClick={() => { if (isInFavorites(game.id)) {
                  removeFromFavorites(game.id);
                  } else {
                    addToFavorites(game);}}}>
                {isInFavorites(game.id) ? 'Remove from Favorites' : 'Add to Favorites'}</button>                
                </div>
                {isDetailsShown && gameId === 960602 && (
                  <div>
                    <GamePage gameId={gameId} />
                    <button onClick={handleCloseDetails} className="close-button">&#x2716;</button>
                  </div>
                )}
              </>
            ) : (
              <>
                <h3>{game.name}</h3>
                <img src={game.background_image} alt={game.name} />
                <p><strong>Release Date:</strong> {game.released}</p>
                <p><strong>Genres:</strong> {game.genres.map(genre => genre.name).join(', ')}</p>
                <div className="button-container">
                  <button
                    id={`buy-button-${game.id}`}
                    className="buy-button"
                    onClick={() => (window.location.href = `https://rawg.io/games/${game.slug}`)}
                  >
                    Buy
                  </button>
                  <button id={`favorite-button-${game.id}`} className="favorite-button" onClick={() => addToFavorites(game)}>Legg til favoritt</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      {gameId && <GamePage gameId={gameId} />}


  <div id="favorite-games">
  <h2 id="favorite-heading">MY FAVORITES</h2>
  <ul className="game-list">
    {favoriteGames.map(game => (
      <li id={`favorite-card-${game.id}`} className="game-card" key={game.id}>
        <div>
          <h3>{game.name}</h3>
          <img src={game.background_image} alt={game.name} />
          <p><strong>Release Date:</strong> {game.released}</p>
          <p><strong>Genres:</strong> {game.genres.map(genre => genre.name).join(', ')}</p>
        </div>
        <button
          className="favorite-button"
          onClick={() => {
            const newFavorites = favoriteGames.filter(favorite => favorite.id !== game.id);
            setFavoriteGames(newFavorites);
            console.log(`Removed ${game.name} from favorites`);
          }}
        >
          Fjern fra favoritter
        </button>
      </li>
    ))}
  </ul>
</div>



<div>
  <h2 id="game-library-heading">MY GAME-LIBRARY - {myGames.length} games</h2>
  <ul className="game-list">
    {myGames.map(game => (
      <li id={`game-card-${game.id}`} className="game-card" key={game.id}>
        <div>
          <h3>{game.name}</h3>
          <img src={game.background_image} alt={game.name} />
          <p><strong>Release Date:</strong> {game.released}</p>
          <p><strong>Genres:</strong> {game.genres.map(genre => genre.name).join(', ')}</p>
        </div>
        <div>
          <button
            className="favorite-button"
            onClick={() => {
              const favoriteIndex = favoriteGames.findIndex(favorite => favorite.id === game.id);
              if (favoriteIndex === -1) {
                setFavoriteGames([...favoriteGames, game]);
              } else {
                const newFavorites = [...favoriteGames];
                newFavorites.splice(favoriteIndex, 1);
                setFavoriteGames(newFavorites);
              }
            }}
          >
            {favoriteGames.some(favorite => favorite.id === game.id) ? "Fjern fra favoritter" : "Legg til favoritter"}
          </button>
        </div>
        </li>
      ))}
    </ul>
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
//Kilde: https://www.w3schools.com/html/html_id.asp
//Kilde: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
//Kilde: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
//Kilde: https://byby.dev/js-slugify-string (For slug)
//Kilde: https://dmitripavlutin.com/fetch-with-json/ (Fetch)
//Kilde: https://legacy.reactjs.org/docs/hooks-effect.html (useEffect)