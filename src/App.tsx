import React from 'react';
import { MovieList } from './scenes/movieList';
import { Route, Routes } from 'react-router';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<MovieList />} />
      </Routes>
    </div>
  );
}

export default App;
