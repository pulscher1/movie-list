import React from 'react';

const MovieData = () => {
  const movies = [
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
  ];

  return (
    <div>Test</div>
    // <div>
    //   <h1>Movies</h1>
    //   <ul>
    //     {movies.map((movie, index) => (
    //       <li key={index}>{movie.title}</li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default MovieData;