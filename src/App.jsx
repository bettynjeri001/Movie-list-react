import React from 'react';
import ItemList from './components/ItemList';
import './App.css';

const App = () => {
  const movies = [
    {
      id: 1,
      title: 'The Titanic',
      year: 1972,
      director: 'Francis Ford Coppola',
      rating: 9.2
    },
    {
      id: 2,
      title: 'Game Of Thrones',
      year: 2008,
      director: 'Christopher Nolan',
      rating: 9.0
    },
    {
      id: 3,
      title: 'Pitch Perfect',
      year: 2004,
      director: 'Quentin Tarantino',
      rating: 8.9
    },
    {
      id: 4,
      title: 'Us',
      year: 2015,
      director: 'Leonado Decaprio',
      rating: 7.0
    },
    {
      id: 5,
      title: 'Little',
      year: 2021,
      director: 'James Hall',
      rating: 9.0
    },
    {
      id: 6,
      title: 'Disaster Holiday',
      year: 2024,
      director: 'George Khumalo',
      rating: 8.5
    }
  ];

  return (
    <div className="app">
      <h1 className="app-header">Top Movies & Series</h1>
      <ItemList items={movies} />
    </div>
  );
};

export default App;
