import React from "react";

const Favorites = ({ savedGems }) => {
  return (
    <div>
      {savedGems.length > 0 ? <h3>Saved Gems</h3> : <h3>No Saved Gems</h3>}
      {savedGems.map(savedGem => {
        return <p key={savedGem.sha}>{savedGem.name}</p>;
      })}
    </div>
  );
};

export default Favorites;
