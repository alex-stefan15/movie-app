import React from 'react';
import { MovieList } from './scenes/movieList';
import { Route, Routes } from 'react-router';
import { MovieDetails } from './scenes/movieDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
