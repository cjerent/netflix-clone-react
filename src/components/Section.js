import React from "react";

function Section({ category, images }) {
  return (
    <div>
      <h2>{category}</h2>

      <div className="movies">
        {images.map((img, index) => {
          return <img key={index} alt="movies-netflix" src={img} />;
        })}
      </div>
    </div>
  );
}

export default Section;
