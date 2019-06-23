import React from "react";

const Favorites = ({ closeFavorites }) => {
  return (
    <div>
      <p>Results</p>
      <button onClick={closeFavorites}>Close Favorites</button>
    </div>
  );
};

export default Favorites;
