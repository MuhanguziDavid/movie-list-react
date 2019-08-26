import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';

function App() {
  const [movies, setMovies] = useState([
    {
      name: 'Hobbs and Shaw',
      price: 'UGX12000',
      id: '1'
    },
    {
      name: 'The lion King',
      price: 'UGX17000',
      id: '2'
    },
    {
      name: 'The lion King',
      price: 'UGX17000',
      id: '2'
    }
  ])

  return (
    <div className="App">
      <Nav movieNumber={movies.length}/>
      <div>
        {movies.map(movie => (
          <MovieList name={movie.name} price={movie.price} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
