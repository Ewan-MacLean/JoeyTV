import React from "react";

function MovieDetails({ data }) {
  return (
    <div>
      {data.map((datum) => (
        <div key={datum._id}>
          <h1>{datum.name}</h1>
          <h2>Joey Rating: {datum.weight}</h2>
          <img src={datum.image.medium} alt={datum.name} />
          <p>{datum.summary} </p>
        </div>
      ))}
    </div>
  );
}

export default MovieDetails;
