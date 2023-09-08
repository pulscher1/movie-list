import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieData from './components/MovieData';

function App() {
  
    const movies = [
      { title: 'Mean Girls' },
      { title: 'Hackers' },
      { title: 'The Grey' },
      { title: 'Sunshine' },
      { title: 'Ex Machina' },
    ];
  
    return (
      <div>
        <h1>Movies</h1>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie.title}</li>
          ))}
        </ul>
      </div>
    );
  };
  // return (
  //   <div>
  //     <Routes>
  //       <Route path="/MovieData" element={<MovieData />} />
  //     </Routes>
  //   </div>
  // );


export default App;