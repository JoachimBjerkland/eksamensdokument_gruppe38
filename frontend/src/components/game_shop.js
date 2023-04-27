<<<<<<< Updated upstream
export default function game_shop() {
    return (
        <h2>Game Shop</h2>
    )
}
=======
import React from 'react';

function GameShop({ games }) {
  return (
    <div>
      <h1 id="gameshop-heading">GAMESHOP</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.title} ({game.platform})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameShop;
>>>>>>> Stashed changes
