import React, { useState } from 'react';
import Movie from './Movie';
import Nav from './Nav';

const MovieList = ({ name, price }) => {
  return (
    <div>
      <Movie name={name} price={price}/>
    </div>
  );
}

export default MovieList;
