import React, { useEffect, useState } from 'react';


const MovieData = (movie) => {
  const [movies, setMovies] = useState([]);

  //test for commits 

  useEffect(() => {
    fetch('http://localhost:8081/')
      .then((response) => response.json())
      .then((movies) => setMovies(movies))
      .catch((error) => console.error('There was a problem with the fetch operation:', error));
  }, []);


  return { movies};
};

export default MovieData;