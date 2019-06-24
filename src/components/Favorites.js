import React from "react";

const Favorites = ({ savedGems }) => {
  return (
    <div>
      {savedGems.length > 0 ? <h3>Saved Gems</h3> : <h3>No Saved Gems</h3>}
      {savedGems.map((savedGem, index) => {
        return (
          <a
            key={index}
            href={savedGem.homepage_uri || savedGem.source_code_uri}
            target="_blank"
          >
            <p>{savedGem.name}</p>
          </a>
        );
      })}
    </div>
  );
};

export default Favorites;
