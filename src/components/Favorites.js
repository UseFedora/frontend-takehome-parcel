import React from "react";

const Favorites = ({ savedGems }) => {
  return (
    <div>
      <h2>{savedGems.length > 0 ? "Saved Gems" : "No Saved Gems"}</h2>
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
      <hr />
    </div>
  );
};

export default Favorites;
