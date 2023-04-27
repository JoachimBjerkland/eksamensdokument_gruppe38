<<<<<<< Updated upstream
export default function home() {
    return (
        <h2>Home</h2>
    )
}
=======
import React from 'react';
import { mygames } from '../games';

function Home() {
  return (
    <div>
      <h1 id="home-heading">GAMESHOP</h1>
      <ul>
        {mygames.slice(0, 3).map((game) => (
          <li key={game.id}>
            {game.title} ({game.platform})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
>>>>>>> Stashed changes
